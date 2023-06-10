import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { DogsTypes } from './dogs.types.tsx'

export const DogsApi = createApi({
    reducerPath: 'breeds',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.thedogapi.com/v1/' }),
    endpoints: build => ({
        getProducts: build.query<DogsTypes[], void>({
            query: () => `breeds`,
        }),
    }),
})

export const { useGetProductsQuery } = DogsApi