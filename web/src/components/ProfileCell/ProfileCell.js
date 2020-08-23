import { Redirect, routes } from '@redwoodjs/router'
import LearningCard from 'src/components/LearningCard'
import { formatDistanceToNow } from 'date-fns'
import { RiCake2Line } from 'react-icons/ri'

export const QUERY = gql`
  query userByUsernameQuery($username: String!) {
    userByUsername(username: $username) {
      id
      username
      name
      createdAt
      learnings {
        id
        content
        createdAt
        comments {
          id
          body
        }
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
      <div className="space-y-5 md:w-2/3 mx-auto text-center mb-10">
        <h1 className="font-bold text-4xl">@{userByUsername.username}</h1>

        <div className="flex justify-center items-center space-x-1 text-gray-600">
          <RiCake2Line />
          <div>
            Joined{' '}
            {formatDistanceToNow(new Date(userByUsername.createdAt), {
              addSuffix: true,
            })}
          </div>
        </div>
      </div>

      <div className="space-y-5 md:w-2/3 mx-auto">
        {userByUsername.learnings.map((learning) => (
          <LearningCard key={learning.id} learning={learning} />
        ))}
      </div>
    </>
  )
}
