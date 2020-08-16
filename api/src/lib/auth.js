import { AuthenticationError } from '@redwoodjs/api'
import { Magic } from '@magic-sdk/admin'

import { createUser, userByIssuer } from 'src/services/users/users'

export const getCurrentUser = async (_decoded, { token }) => {
  const mAdmin = new Magic(process.env.MAGICLINK_SECRET)
  const { email, issuer } = await mAdmin.users.getMetadataByToken(token)

  let user = await userByIssuer({ issuer })

  if (!user) {
    user = await createUser({ input: { email, issuer } })
  }

  return user
}

export const requireAuth = () => {
  if (!context.currentUser) {
    throw new AuthenticationError("You don't have permission to do that.")
  }
}
