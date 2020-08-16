import { Link, routes } from '@redwoodjs/router'
import AuthModal from 'src/components/AuthModal/AuthModal'

const Nav = () => {
  return (
    <div className="flex items-center justify-between">
      <Link to={routes.feed()} className="font-bold text-4xl">til</Link>
      <AuthModal />
    </div>
  )
}

export default Nav
