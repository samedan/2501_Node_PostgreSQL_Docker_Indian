import pool from "../config/db.js";

// GET All Users
export const getAllUsersService = async () => {
  const result = await pool.query("SELECT * FROM users;");
  return result.rows;
};

// GET User By ID
export const getUserByIdService = async (id) => {
  const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
  return result.rows[0];
};

// POST User
export const createUserService = async (name, email) => {
  const result = await pool.query(
    "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING * ;",
    [name, email]
  );
  return result.rows[0];
};

// UPDATE/PUT User
export const updateUserService = async (id, name, email) => {
  const result = await pool.query(
    "UPDATE users SET name=$1, email=$2 WHERE id=$3 RETURNING *;",
    [name, email, id]
  );
  return result.rows[0];
};

// DELETE User
export const deleteUserService = async (id) => {
  const result = await pool.query(
    "DELETE FROM users WHERE id=$1 RETURNING *;",
    [id]
  );
  return result.rows[0];
};
