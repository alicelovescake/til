import { render } from '@redwoodjs/testing'

import LearningComposer from './LearningComposer'

describe('LearningComposer', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LearningComposer />)
    }).not.toThrow()
  })
})
