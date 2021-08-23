import { loginFunction } from '../services/login';

export const login = async (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;
  let response = {};
  let statusCode = 403;

  try {
    response = { "data":  await loginFunction(username, password) };
    statusCode = 200;
  } catch(error) {
    response = { "message": "unauthorized" };
  }

  res.status(statusCode).send(response);
  next();
}
