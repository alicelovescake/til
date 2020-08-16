import {
  Form,
  Label,
  TextAreaField,
  FieldError,
  Submit,
  RadioField,
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'

const CREATE_LEARNING = gql`
  mutation CreateLearningMutation($input: CreateLearningInput!) {
    createLearning(input: $input) {
      id
    }
  }
`

const LearningComposer = () => {
  const [create] = useMutation(CREATE_LEARNING)
  const onSubmit = (input) => {
    create({ variables: { input } })
  }
  return (
    <div>
      <Form onSubmit={onSubmit} className="flex flex-col">
        <Label name="content" errorClassName="text-red-600" />
        <TextAreaField
          name="content"
          errorClassName="border-red-600"
          validation={{ required: true }}
          placeholder="What did you learn today?"
        />
        <FieldError name="content" className="text-red-600" />

        <Label name="type" errorClassName="text-red-600">
          Success
        </Label>
        <RadioField name="type" value="SUCCESS" defaultChecked />
        <Label name="type" errorClassName="text-red-600">
          Failure
        </Label>
        <RadioField name="type" value="FAILURE" />
        <FieldError name="type" className="text-red-600" />

        <Submit>Share!</Submit>
      </Form>
    </div>
  )
}

export default LearningComposer
