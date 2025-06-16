import { baseApi } from '../../api/baseApi';

export type TSkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';
export type TSkillCategory = 'frontend' | 'backend' | 'database' | 'devops' | 'mobile' | 'design' | 'other';

export interface ISkill {
  _id: string;
  name: string;
  image: string;
  short_description: string;
  experience_years: number;
  level: TSkillLevel;
  category: TSkillCategory;
  proficiency_percentage?: number;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
}

interface ApiResponse<T> {
  data: T;
}

export const skillApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSkills: builder.query<ApiResponse<ISkill[]>, void>({
      query: () => '/skills',
      providesTags: ['Skills'],
    }),
    getFeaturedSkills: builder.query<ApiResponse<ISkill[]>, void>({
      query: () => '/skills?featured=true',
      providesTags: ['Skills'],
    }),
    getSkillsByCategory: builder.query<ApiResponse<ISkill[]>, TSkillCategory>({
      query: (category) => `/skills?category=${category}`,
      providesTags: ['Skills'],
    }),
  }),
});

export const { 
  useGetAllSkillsQuery, 
  useGetFeaturedSkillsQuery, 
  useGetSkillsByCategoryQuery 
} = skillApi; 