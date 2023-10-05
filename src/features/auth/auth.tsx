import { useCurrentQuery } from "../../app/services/auth"

export const Auth = ({ children }: { children: JSX.Element }) => {
  const { isLoading } = useCurrentQuery()

  if (isLoading) {
    // добавим потом framer motion
    return <span>Загрузка</span>
  }

  return children
}
