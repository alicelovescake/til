import { Link, navigate } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import { useState } from 'react'

const HomePage = () => {
  const [email, setEmail] = useState('')
  const { isAuthenticated, currentUser, logIn, logOut } = useAuth()
  console.log(isAuthenticated, currentUser)
  return (
    <>
      <h1 className="font-bold text-4xl">HomePage</h1>
      <p>Find me in "./web/src/pages/HomePage/HomePage.js"</p>
      <form action="#">
        <input
          type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={async () => {
            if (isAuthenticated) {
              await logOut()
            } else {
              await logIn({ email })
            }
          }}
        >
          {isAuthenticated ? 'Log out' : 'Log in'}
        </button>
      </form>
      <p>
        My default route is named "home", link to me with `
        <Link to="home">routes.home()</Link>`
      </p>
    </>
  )
}

export default HomePage
