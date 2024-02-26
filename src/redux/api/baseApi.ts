import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.example.com' }),
    endpoints: (builder) => ({
        getSomething: builder.query({
            query: () => 'something'
        })
    })
})