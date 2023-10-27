import pool from "../index.js";

const db = {
  getAllUsers: async function () {
    const response = await pool.query("select * from users");
    return response.rows;
  },
  findUserByName: async function (name: string) {
    const response = await pool.query(
      "SELECT * FROM users WHERE username = $1",
      [name]
    );
    return response.rows;
  },
  createUser: async function (name: string, password: string) {
    const response = await pool.query("INSERT INTO users(username, password) VALUES ($1,$2)", [
      name,
      password,
    ]);
    return response
  },
};

export default db;
