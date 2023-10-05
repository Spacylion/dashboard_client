import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react"
import { RootState } from "../store"

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8000/api",
  prepareHeaders(headers, { getState }) {
    // елси есть в RooStore токен, то запиши в переменную
    // если нет, то || возьми из локал сторедж
    const token =
      (getState() as RootState).auth.user?.token ||
      localStorage.getItem("token")

    if (token && token !== null) {
      headers.set("authorization", `Bearer ${token}`)
    }
  },
  // Добавим логику чтобы мы добавляли bearer token в authorization ищ localstorage
  // const token = (getState() as RootState)
})

// если какой0то сервер не отвечает, то делаем лимиты
const baseQueryWidthRetry = retry(baseQuery, { maxRetries: 3 })

export const api = createApi({
  reducerPath: "splitApi",
  baseQuery: baseQueryWidthRetry,
  refetchOnMountOrArgChange: true,
  endpoints: () => ({}),
})
