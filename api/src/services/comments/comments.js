import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

export const comments = () => {
  return db.comment.findMany()
}

export const comment = ({ id }) => {
  return db.comment.findOne({
    where: { id },
  })
}

export const createComment = ({ input }) => {
  requireAuth()
  const { body, learningId } = input
  return db.comment.create({
    data: {
      body,
      user: {
        connect: { id: context.currentUser.id },
      },
      learning: {
        connect: { id: learningId },
      },
    },
  })
}

export const updateComment = ({ id, input }) => {
  return db.comment.update({
    data: input,
    where: { id },
  })
}

export const deleteComment = ({ id }) => {
  return db.comment.delete({
    where: { id },
  })
}

export const Comment = {
  user: (_obj, { root }) =>
    db.comment.findOne({ where: { id: root.id } }).user(),
  learning: (_obj, { root }) =>
    db.comment.findOne({ where: { id: root.id } }).learning(),
}
