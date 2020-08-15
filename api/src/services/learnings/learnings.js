import { db } from 'src/lib/db'

export const learnings = () => {
  return db.learning.findMany()
}

export const learning = ({ id }) => {
  return db.learning.findOne({
    where: { id },
  })
}

export const createLearning = ({ input }) => {
  return db.learning.create({
    data: input,
  })
}

export const updateLearning = ({ id, input }) => {
  return db.learning.update({
    data: input,
    where: { id },
  })
}

export const deleteLearning = ({ id }) => {
  return db.learning.delete({
    where: { id },
  })
}

export const Learning = {
  author: (_obj, { root }) =>
    db.learning.findOne({ where: { id: root.id } }).author(),
  tags: (_obj, { root }) =>
    db.learning.findOne({ where: { id: root.id } }).tags(),
  likes: (_obj, { root }) =>
    db.learning.findOne({ where: { id: root.id } }).likes(),
  comments: (_obj, { root }) =>
    db.learning.findOne({ where: { id: root.id } }).comments(),
}
