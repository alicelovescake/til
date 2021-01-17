import {
  Form,
  Label,
  TextAreaField,
  FieldError,
  Submit,
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { useForm } from 'react-hook-form'
import Button from 'src/components/Button'

const CREATE_COMMENT = gql`
  mutation CreateCommentMutation($input: CreateCommentInput!) {
    createComment(input: $input) {
      id
    }
  }
`

const CommentComposer = ({ learningId }) => {
  const [create] = useMutation(CREATE_COMMENT)
  const formMethods = useForm()

  const onSubmit = (input) => {
    create({
      variables: {
        input: {
          ...input,
          learningId,
        },
      },
    })
    formMethods.reset()
  }

  return (
    <div className="bg-white rounded-lg p-4 w-1/2 mx-auto shadow-lg">
      <Form onSubmit={onSubmit} formMethods={formMethods}>
        <Label name="body" className="hidden" errorClassName="text-red-600" />
        <TextAreaField
          name="body"
          className="block w-full rounded-lg p-2 h-32 bg-til-offwhite bg-opacity-25 border-2 border-til-offwhite focus:bg-white focus:outline-none focus:border-til-green resize-none"
          errorClassName="border-red-600"
          validation={{ required: true }}
          placeholder="Share your thoughts!"
        />
        <FieldError name="body" className="text-red-600" />

        <div className="flex justify-end mt-4">
          <Button>
            <Submit className="font-bold">Comment</Submit>
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default CommentComposer
