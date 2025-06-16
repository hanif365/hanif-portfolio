import { baseApi } from '../../api/baseApi';

export interface IHashtag {
  name: string;
  _id: string;
}

export interface IBlog {
  _id: string;
  name: string;
  short_description: string;
  description: string;
  image: string;
  hashtags: IHashtag[];
  live_link?: string;
  status: string;
  created_at: string;
  updated_at: string;
}

interface ApiResponse<T> {
  data: T;
}

export const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBlogs: builder.query<ApiResponse<IBlog[]>, void>({
      query: () => '/blogs',
      providesTags: ['Blogs'],
    }),
    getFeaturedBlogs: builder.query<ApiResponse<IBlog[]>, void>({
      query: () => '/blogs',
      transformResponse: (response: ApiResponse<IBlog[]>) => ({
        data: response.data.slice(0, 3)
      }),
      providesTags: ['Blogs'],
    }),
  }),
});

export const { useGetAllBlogsQuery, useGetFeaturedBlogsQuery } = blogApi; 