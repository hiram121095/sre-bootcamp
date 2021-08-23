import { verifyToken } from '../auxiliaries/data/jwt'

export const protectFunction = (authorization) => (
  verifyToken(authorization).then(resultAuth => resultAuth)
)
