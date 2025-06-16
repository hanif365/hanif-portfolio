import { baseApi } from '../../api/baseApi';

export type TEmploymentType = 'full-time' | 'part-time' | 'contract' | 'internship' | 'freelance';
export type TLocationType = 'on-site' | 'remote' | 'hybrid';

export interface IExperience {
  _id: string;
  company: string;
  position: string;
  location: string;
  location_type: TLocationType;
  employment_type: TEmploymentType;
  start_date: string;
  end_date?: string;
  is_current: boolean;
  description: string;
  responsibilities: string[];
  technologies_used: string[];
  company_logo?: string;
  company_website?: string;
  achievements?: string[];
  duration?: string;
  created_at: string;
  updated_at: string;
}

interface ApiResponse<T> {
  data: T;
}

export const experienceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllExperiences: builder.query<ApiResponse<IExperience[]>, void>({
      query: () => '/experiences',
      providesTags: ['Experiences'],
      transformResponse: (response: ApiResponse<IExperience[]>) => ({
        data: response.data.sort((a, b) => {
          // Sort by is_current first, then by start_date in descending order
          if (a.is_current && !b.is_current) return -1;
          if (!a.is_current && b.is_current) return 1;
          
          const dateA = new Date(a.start_date).getTime();
          const dateB = new Date(b.start_date).getTime();
          return dateB - dateA;
        })
      }),
    }),
  }),
});

export const { useGetAllExperiencesQuery } = experienceApi; 