import { baseApi } from '../../api/baseApi';

export interface ITechnology {
  name: string;
  _id: string;
}

export interface IProject {
  _id: string;
  name: string;
  short_description: string;
  description: string;
  image: string;
  technology_used: ITechnology[];
  github_link_client: string;
  github_link_server: string;
  live_link_client: string;
  live_link_server: string;
  status: string;
  created_at: string;
  updated_at: string;
}

interface ApiResponse<T> {
  data: T;
}

export const projectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProjects: builder.query<ApiResponse<IProject[]>, void>({
      query: () => '/projects',
      providesTags: ['Projects'],
    }),
    getFeaturedProjects: builder.query<ApiResponse<IProject[]>, void>({
      query: () => '/projects',
      transformResponse: (response: ApiResponse<IProject[]>) => ({
        data: response.data.slice(0, 3)
      }),
      providesTags: ['Projects'],
    }),
  }),
});

export const { useGetAllProjectsQuery, useGetFeaturedProjectsQuery } = projectApi; 