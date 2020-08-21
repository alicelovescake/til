import { Link } from '@redwoodjs/router'
import AppLayout from 'src/layouts/AppLayout'
import UserCell from 'src/components/ProfileCell'

const ProfilePage = ({ username }) => {
  return (
    <>
      <AppLayout>
        <UserCell username={username} />
      </AppLayout>
    </>
  )
}

export default ProfilePage
