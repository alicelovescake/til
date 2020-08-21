import { render } from '@redwoodjs/testing'

import LearningCard from './LearningCard'

describe('LearningCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LearningCard />)
    }).not.toThrow()
  })
})
