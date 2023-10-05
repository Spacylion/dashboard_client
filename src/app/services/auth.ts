import { User } from "@prisma/client"
import { api } from "./api"

// дата которая придет. Omit работает так
// представляет собой тип User с исключением поля id
export type UserData = Omit<User, "id">
// тут наоборот, добавь & токен
type ResponseLoginData = User & { token: string }

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // mutation потому что мы делаем пост запрос и получаем что-то в ответ
    login: builder.mutation<ResponseLoginData, UserData>({
      query: (userData) => ({
        url: "/user/login",
        method: "POST",
        body: userData,
      }),
    }),
    register: builder.mutation<ResponseLoginData, UserData>({
      query: (userData) => ({
        url: "/user/register",
        method: "POST",
        body: userData,
      }),
    }),
    current: builder.query<ResponseLoginData, void>({
      query: (userData) => ({
        url: "/user/current",
        method: "GET",
        body: userData,
      }),
    }),
  }),
})
// генерируются хуки автоматом кемелКейсом
export const { useLoginMutation, useRegisterMutation, useCurrentQuery } =
  authApi

export const {
  endpoints: { login, register, current },
} = authApi
