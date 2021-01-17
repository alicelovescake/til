import { formatDistanceToNow } from 'date-fns'
import { RiLeafLine, RiChatNewLine } from 'react-icons/ri'
import CommentComposer from 'src/components/CommentComposer'
import { useMutation } from '@redwoodjs/web'
import { useState } from 'react'

const CREATE_LIKE = gql`
  mutation CreateLikeMutation($input: CreateLikeInput!) {
    createLike(input: $input) {
      id
    }
  }
`

const LearningCard = ({ learning }) => {
  const [likes, setLikes] = useState(learning.likes.length)
  const [createLike] = useMutation(CREATE_LIKE, {
    onCompleted: () => setLikes(likes + 1),
  })

  const handleLike = () => {
    createLike({
      variables: {
        input: {
          learningId: learning.id,
        },
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
          {likes}
          <RiLeafLine
            onClick={handleLike}
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
