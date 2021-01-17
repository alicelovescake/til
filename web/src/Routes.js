import { Router, Route, Private } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/welcome" page={WelcomePage} name="welcome" />
      <Route path="/{username}" page={ProfilePage} name="profile" />
      <Private unauthenticated="welcome">
        <Route path="/" page={FeedPage} name="feed" />
      </Private>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
