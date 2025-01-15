import {
  createUserService,
  deleteUserService,
  getAllUsersService,
  getUserByIdService,
  updateUserService,
} from "../models/userModel.js";

// Standardized Response function
const handleResponse = (res, status, message, data = null) => {
  res.status(status).json({
    status,
    message,
    data,
  });
};

// POST User
export const createUser = async (req, res, next) => {
  const { name, email } = req.body;
  try {
    const newUser = await createUserService(name, email);
    handleResponse(res, 201, "User created succesfully", newUser);
  } catch (err) {
    next(err);
  }
};

// GET All Users
export const getAllUsers = async (req, res, next) => {
  try {
    const users = await getAllUsersService();
    handleResponse(res, 200, "Users fetched succesfully", users);
  } catch (err) {
    next(err);
  }
};

// GET User By ID
export const getUserById = async (req, res, next) => {
  try {
    const user = await getUserByIdService(req.params.id);
    if (!user) return handleResponse(res, 404, "User not found");
    handleResponse(res, 200, "User fetched succesfully", user);
  } catch (err) {
    next(err);
  }
};

// UPDATE User
export const updateUser = async (req, res, next) => {
  const { name, email } = req.body;
  try {
    const updatedUser = await updateUserService(req.params.id, name, email);
    if (!updatedUser) return handleResponse(res, 404, "User not found");
    handleResponse(res, 200, "User updated succesfully", updatedUser);
  } catch (err) {
    next(err);
  }
};

// DELETE User
export const deleteUser = async (req, res, next) => {
  try {
    const user = await deleteUserService(req.params.id);
    if (!user) return handleResponse(res, 404, "User not found");
    handleResponse(res, 200, "User deleted succesfully", user);
  } catch (err) {
    next(err);
  }
};
