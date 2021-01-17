import { Link } from '@redwoodjs/router'
import AppLayout from 'src/layouts/AppLayout'
import ProfileCell from 'src/components/ProfileCell'

const ProfilePage = ({ username }) => {
  return (
    <>
      <AppLayout>
        <ProfileCell username={username} />
      </AppLayout>
    </>
  )
}

export default ProfilePage
