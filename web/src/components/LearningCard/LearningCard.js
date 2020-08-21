import { formatDistanceToNow } from 'date-fns'
import { RiLeafLine } from 'react-icons/ri'

const LearningCard = ({ learning }) => {
  return (
    <div className="space-y-4 shadow-xl p-5 bg-white rounded-lg">
      <div>{learning.content}</div>

      <div className="flex justify-between items-center">
        <div className="text-xs text-gray-600">
          Learned {formatDistanceToNow(new Date(learning.createdAt), { addSuffix: true })}
        </div>

        <div className="text-gray-600">
          <RiLeafLine className="text-2xl hover:text-til-green hover:cursor-pointer" />
        </div>
      </div>
    </div>
  )
}

export default LearningCard
