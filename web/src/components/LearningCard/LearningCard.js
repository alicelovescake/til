import { formatDistanceToNow } from 'date-fns'
import { RiLeafLine, RiChatNewLine } from 'react-icons/ri'
import CommentComposer from 'src/components/CommentComposer'

const LearningCard = ({ learning }) => {
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
          <RiLeafLine className="text-xl hover:text-til-green hover:cursor-pointer" />
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
