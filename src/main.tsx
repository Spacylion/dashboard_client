import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Paths } from "./paths.ts"
import { Login } from "./pages/login/index.tsx"
import { Register } from "./pages/register/index.tsx"
import { store } from "./app/store.ts"
import { Provider } from "react-redux"
import { ConfigProvider, theme } from "antd"
import "./index.css"
import { Auth } from "./features/auth/auth.tsx"
import { Employees } from "./pages/employees/index.tsx"

const router = createBrowserRouter([
  {
    path: Paths.home,
    element: <Employees />,
  },
  {
    path: Paths.login,
    element: <Login />,
  },
  {
    path: Paths.register,
    element: <Register />,
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
        }}
      >
        {/* при отрисовке приложения первым будет орисовываться Auth */}
        <Auth>
          <RouterProvider router={router} />
        </Auth>
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
)
