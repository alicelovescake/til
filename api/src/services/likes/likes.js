import { db } from 'src/lib/db'

export const likes = () => {
  return db.like.findMany()
}

export const like = ({ id }) => {
  return db.like.findOne({
    where: { id },
  })
}

export const createLike = ({ input }) => {
  return db.like.create({
    data: input,
  })
}

export const updateLike = ({ id, input }) => {
  return db.like.update({
    data: input,
    where: { id },
  })
}

export const deleteLike = ({ id }) => {
  return db.like.delete({
    where: { id },
  })
}

export const Like = {
  user: (_obj, { root }) => db.like.findOne({ where: { id: root.id } }).user(),
  learning: (_obj, { root }) =>
    db.like.findOne({ where: { id: root.id } }).learning(),
}
