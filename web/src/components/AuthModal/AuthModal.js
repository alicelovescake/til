import { useAuth } from '@redwoodjs/auth'
import { useState } from 'react'
import Modal from 'src/components/Modal'
import Button from 'src/components/Button'

const AuthModal = () => {
  const [email, setEmail] = useState('')
  const [displayAuthModal, setDisplayAuthModal] = useState(false)
  const { isAuthenticated, currentUser, logIn, logOut } = useAuth()

  return (
    <div>
      <div>
        {
          isAuthenticated && <><span className="font-bold">{currentUser.username}</span><span>{' | '}</span></>
        }

        <span
          className="hover:text-gray-700 hover:cursor-pointer"
          onClick={async () => {
            if (!isAuthenticated) {
              setDisplayAuthModal(true)
            } else {
              await logOut()
            }
          }}
        >
          {isAuthenticated ? 'Log out' : 'Log in'}
        </span>
      </div>

      <Modal open={displayAuthModal} onModalClose={() => setDisplayAuthModal(false)}>
        <h2 className="font-bold text-6xl text-center">👋</h2>

        <div>
          <p>
            Throw your email in the box below to log in.
          </p>

          <p>
            If you don't have an account yet, we'll handle that for you!
          </p>
        </div>

        <form action="#" className="space-y-4 flex flex-col">
          <input
            className="rounded-lg p-2 bg-til-offwhite bg-opacity-25 border-2 border-til-offwhite w-full focus:bg-white focus:outline-none focus:border-til-green"
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="leonardo.davinci@florencemail.com"
          />

          <Button onClick={async () => { await logIn({ email }) }} >
            {isAuthenticated ? 'Log out' : 'Log in'}
          </Button>
        </form>
      </Modal>
    </div>
  )
}

export default AuthModal
