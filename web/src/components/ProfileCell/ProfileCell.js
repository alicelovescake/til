import { Redirect, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query userByUsernameQuery($username: String!) {
    userByUsername(username: $username) {
      id
      username
      name
      learnings {
        id
        content
        createdAt
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <Redirect to={routes.notfound()} />

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ userByUsername }) => {
  return (
    <>
      <h1>{userByUsername.username}</h1>
      {userByUsername.learnings.map((learning) => (
        <div key={learning.id}>
          <div>{learning.content}</div>
          <div>{learning.createdAt}</div>
        </div>
      ))}
    </>
  )
}
