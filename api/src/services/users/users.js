import { db } from 'src/lib/db'

export const users = () => {
  return db.user.findMany()
}

export const user = ({ id }) => {
  return db.user.findOne({
    where: { id },
  })
}

export const userByIssuer = ({ issuer }) => {
  return db.user.findOne({
    where: { issuer },
  })
}

export const createUser = ({ input }) => {
  const emailWithoutDomain = input.email.split('@')[0]
  input.username = `${emailWithoutDomain}${new Date()
    .getTime()
    .toString()
    .slice(-5)}`

  return db.user.create({
    data: input,
  })
}

export const updateUser = ({ id, input }) => {
  return db.user.update({
    data: input,
    where: { id },
  })
}

export const deleteUser = ({ id }) => {
  return db.user.delete({
    where: { id },
  })
}

export const User = {
  location: (_obj, { root }) =>
    db.user.findOne({ where: { id: root.id } }).location(),
  learnings: (_obj, { root }) =>
    db.user.findOne({ where: { id: root.id } }).learnings(),
  likes: (_obj, { root }) =>
    db.user.findOne({ where: { id: root.id } }).likes(),
  comments: (_obj, { root }) =>
    db.user.findOne({ where: { id: root.id } }).comments(),
}
