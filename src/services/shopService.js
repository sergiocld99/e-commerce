// FROM ".../query/react" para generación automática de Hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../db/database";

// define API
export const shopApi = createApi({
  baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
  endpoints: (builder) => ( 
    {
      // El nombre del archivo en cloud es la Key, y tiene extension .json
      getProducts: builder.query({query: () => 'products.json'}),
      getProductsOfCategory: builder.query({
        query: (category) => `products.json?orderBy="category"&equalTo="${category}"`,
        // Se requiere transformar los campos de la respuesta en un arreglo
        transformResponse: (res) => Object.values(res)
      }),
      getProductById: builder.query({
        query: (id) => `products.json?orderBy="id"&equalTo=${id}`,
        // Se requiere transformar los campos en un arreglo, y agarrar el elemento 0
        transformResponse: res => Object.values(res)[0]
      }),
      getCategories: builder.query({query: () => 'categories.json'})
    }
  )
})

// export hooks from API
export const { 
  useGetProductsQuery, 
  useGetProductsOfCategoryQuery,
  useGetProductByIdQuery, 
  useGetCategoriesQuery 
} = shopApi