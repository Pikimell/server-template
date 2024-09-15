import { Hono } from "hono";

const user = new Hono();
user.get("/user", (c) => c.text("List Users")); // GET /user
user.post("/user", (c) => c.text("Create User")); // POST /user

export default user;
