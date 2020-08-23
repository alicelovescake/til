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

const CREATE_LEARNING = gql`
  mutation CreateLearningMutation($input: CreateLearningInput!) {
    createLearning(input: $input) {
      id
    }
  }
`

const LearningComposer = () => {
  const [create] = useMutation(CREATE_LEARNING)
  const formMethods = useForm()

  const onSubmit = (input) => {
    create({ variables: { input } })
    formMethods.reset()
  }

  return (
    <div className="bg-white rounded-lg p-4 w-1/2 mx-auto shadow-lg">
      <Form onSubmit={onSubmit} formMethods={formMethods}>
        <Label
          name="content"
          className="hidden"
          errorClassName="text-red-600"
        />
        <TextAreaField
          name="content"
          className="block w-full rounded-lg p-2 h-32 bg-til-offwhite bg-opacity-25 border-2 border-til-offwhite focus:bg-white focus:outline-none focus:border-til-green resize-none"
          errorClassName="border-red-600"
          validation={{ required: true }}
          placeholder="What did you learn today?"
        />
        <FieldError name="content" className="text-red-600" />

        <div className="flex justify-end mt-4">
          <Button>
            <Submit className="font-bold">Share</Submit>
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default LearningComposer
