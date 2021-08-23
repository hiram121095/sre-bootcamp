import { protectFunction } from '../services/protected';

export const protect = async (req, res, next) => {
  let authorization = req.headers.authorization;
  let response = {};
  let statusCode = 403;

  try {
    response = { "data": await protectFunction(authorization) };
    statusCode = 200;
  } catch(error) {
    response = { "message": "unauthorized" };
  }

  res.send(response);
  next();
}
