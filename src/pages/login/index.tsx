import { Card, Form, Row, Space, Typography } from "antd"
import { Layout } from "../../components/layout"
import { CustomInput } from "../../components/custom-input" // Corrected import
import { PasswordInput } from "../../components/password-input" // Corrected import
import { CustomButton } from "../../components/custom-button" // Corrected import
import { Link, useNavigate } from "react-router-dom"
import { Paths } from "../../paths"
import { UserData, useLoginMutation } from "../../app/services/auth"
import { isErrorWithMessage } from "../../utils/is-error-with-message"
import { useState } from "react"
import { ErrorMessage } from "../../components"

export const Login = () => {
  const navigate = useNavigate()
  // первая функуия вызывается  ,а вторая принимает результат,
  // равносильно как useState
  const [loginUser, loginUserResult] = useLoginMutation()
  const [error, setError] = useState("")
  const login = async (data: UserData) => {
    try {
      await loginUser(data).unwrap()

      navigate("/")
    } catch (e) {
      const maybeError = isErrorWithMessage(e)
      // если это правда то
      if (maybeError) {
        setError(e.data.message)
      } else {
        setError("Неизвестная ошибка")
      }
    }
  }
  const handleButtonClick = () => {
    // Your button click logic goes here
  }
  return (
    <Layout>
      <Row align='middle' justify='center'>
        <Card title='Войдите' style={{ width: "30rem" }}>
          <Form onFinish={login}>
            <CustomInput name='email' placeholder='Email' type='email' />
            <PasswordInput name='password' placeholder='Пароль' />
            <CustomButton
              type='primary'
              htmlType='submit'
              onClick={handleButtonClick}
            >
              Войти
            </CustomButton>
          </Form>
          <Space direction='vertical' size='large'>
            <Typography.Text>
              Нет аккаунта?
              <Link to={Paths.register}>Зарегистрируйтесь</Link>
            </Typography.Text>
            <ErrorMessage message={error} />
          </Space>
        </Card>
      </Row>
    </Layout>
  )
}
