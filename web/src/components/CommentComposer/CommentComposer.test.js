import { render } from '@redwoodjs/testing'

import CommentComposer from './CommentComposer'

describe('CommentComposer', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CommentComposer />)
    }).not.toThrow()
  })
})
