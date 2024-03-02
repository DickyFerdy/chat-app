import authService from "../services/auth-service.js";

const signup = async (req, res, next) => {
  try {
    const request = req.body;
    const result = await authService.signup(request, res);
    res.status(201).json(result);
  } catch (error) {
    next(error)
  }
};

const login = async (req, res, next) => {
  try {
    const request = req.body;
    const result = await authService.login(request, res);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export default {
  signup,
  login,
};
