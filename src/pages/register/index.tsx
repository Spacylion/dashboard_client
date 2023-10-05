import { Card, Form, Row, Space, Typography } from "antd"
import { Layout } from "../../components/layout"
import { CustomInput } from "../../components/custom-input" // Corrected import
import { PasswordInput } from "../../components/password-input" // Corrected import
import { CustomButton } from "../../components/custom-button" // Corrected import
import { Link } from "react-router-dom"
import { Paths } from "../../paths"

export const Register = () => {
  const handleButtonClick = () => {
    // Your button click logic goes here
  }
  return (
    <Layout>
      <Row align='middle' justify='center'>
        <Card title='Зарегистрирутесь' style={{ width: "30rem" }}>
          <Form onFinish={() => null}>
            <CustomInput name='name' placeholder='Имя' type='text' />
            <CustomInput name='email' placeholder='Email' type='Email' />
            <PasswordInput name='password' placeholder='Пароль' />
            <PasswordInput
              name='confirmPassword'
              placeholder='Повторите пароль'
            />
            <CustomButton
              type='primary'
              htmlType='submit'
              onClick={handleButtonClick}
            >
              Зарегистрироваться
            </CustomButton>
          </Form>
          <Space direction='vertical' size='large'>
            <Typography.Text>
              Уже зарегистрированы?
              <Link to={Paths.login}>Войдите</Link>
            </Typography.Text>
          </Space>
        </Card>
      </Row>
    </Layout>
  )
}
