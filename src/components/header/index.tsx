import { Layout, Space, Typography } from "antd"
import styles from "./index.module.css"
import {
  LoginOutlined,
  LogoutOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons"
import { CustomButton } from "../custom-button"
import { Link, useNavigate } from "react-router-dom"
import { Paths } from "../../paths"
import { useDispatch, useSelector } from "react-redux"
import { logout, selectUser } from "../../features/auth/authSlice"

export const Header = () => {
  const user = useSelector(selectUser)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const onLogOutClick = () => {
    dispatch(logout())
    localStorage.removeItem("token")
    navigate("/login")
  }
  return (
    <Layout.Header className={styles.header}>
      <Space>
        <TeamOutlined className={styles.teamIcon} />
        <Link to={Paths.home}>
          <CustomButton type='ghost' onClick={() => null}>
            <Typography.Title level={1}>Сотрудники</Typography.Title>
          </CustomButton>
        </Link>
      </Space>
      {user ? (
        <CustomButton
          type='ghost'
          icon={<LogoutOutlined />}
          onClick={onLogOutClick}
        >
          Выйти
        </CustomButton>
      ) : (
        <Space>
          <Link to={Paths.register}>
            <CustomButton type='ghost' icon={<UserOutlined />}>
              Зарегистрироваться
            </CustomButton>
          </Link>
          <Link to={Paths.login}>
            <CustomButton type='ghost' icon={<LoginOutlined />}>
              Войти
            </CustomButton>
          </Link>
        </Space>
      )}
    </Layout.Header>
  )
}
