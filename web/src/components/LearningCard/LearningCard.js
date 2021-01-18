import { formatDistanceToNow } from 'date-fns'
import { RiLeafLine, RiChatNewLine } from 'react-icons/ri'
import CommentComposer from 'src/components/CommentComposer'
import { useMutation } from '@redwoodjs/web'
import { useState } from 'react'
import { useAuth } from '@redwoodjs/auth'

const CREATE_LIKE = gql`
  mutation CreateLikeMutation($input: CreateLikeInput!) {
    createLike(input: $input) {
      id
      userId
    }
  }
`
const DELETE_LIKE = gql`
  mutation DeleteLikeMutation($id: Int!) {
    deleteLike(id: $id) {
      id
    }
  }
`

const LearningCard = ({ learning }) => {
  const { currentUser } = useAuth()
  const [likes, setLikes] = useState(learning.likes)
  const [createLike] = useMutation(CREATE_LIKE, {
    onCompleted: ({ createLike }) =>
      setLikes([...likes, { id: createLike.id, userId: createLike.userId }]),
  })

  const [deleteLike] = useMutation(DELETE_LIKE, {
    onCompleted: ({ deleteLike }) =>
      setLikes(likes.filter((like) => like.id !== deleteLike.id)),
  })

  const likedByCurrentUser = likes.some(
    (like) => like.userId === currentUser.id
  )

  const handleLike = () => {
    createLike({
      variables: {
        input: {
          learningId: learning.id,
        },
      },
    })
  }

  const handleUnlike = () => {
    const likeToDelete = likes.find((like) => like.userId === currentUser.id)
    if (!likeToDelete) {
      return
    }
    deleteLike({
      variables: {
        id: likeToDelete.id,
      },
    })
  }

  return (
    <div className="space-y-4 shadow-xl p-5 bg-white rounded-lg">
      <div>{learning.content}</div>
      <div className="flex justify-between items-center">
        <div className="text-xs text-gray-600">
          Learned{' '}
          {formatDistanceToNow(new Date(learning.createdAt), {
            addSuffix: true,
          })}
        </div>

        <div className="text-gray-600 flex space-x-2">
          {likes.length}
          <RiLeafLine
            onClick={likedByCurrentUser ? handleUnlike : handleLike}
            className="text-xl hover:text-til-green hover:cursor-pointer"
          />
          <RiChatNewLine className="text-xl hover:text-til-green hover:cursor-pointer" />
        </div>
      </div>

      <CommentComposer learningId={learning.id} />
      {learning.comments.map((comment) => (
        <div key={comment.id}>{comment.body}</div>
      ))}
    </div>
  )
}

export default LearningCard
