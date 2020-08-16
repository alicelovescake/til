import { navigate, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

import AppLayout from 'src/layouts/AppLayout'

const WelcomePage = () => {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    navigate(routes.feed())
  }

  return (
    <>
      <AppLayout>
        <h1 className="font-bold text-4xl">Welcome!</h1>
      </AppLayout>
    </>
  )
}

export default WelcomePage
