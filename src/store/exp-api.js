import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const expApi = createApi({
    reducerPath: 'photosApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getPhotos: builder.query({
            query: () => '/photos?_limit=50'
        }),
        getTodos: builder.query({
            query: () => '/todos?_limit=50'
        }),
        getComments: builder.query({
            query: () => '/comments?_limit=50'
        })
    })
});

export const { useGetPhotosQuery, useGetTodosQuery, useGetCommentsQuery } = expApi;