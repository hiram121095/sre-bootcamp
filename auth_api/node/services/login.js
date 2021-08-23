import { getSession } from '../auxiliaries/session-manager'

export const loginFunction = (username, password) => (
  getSession(username, password).then(token => token)
)
