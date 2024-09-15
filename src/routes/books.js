import { Hono } from "hono";

const book = new Hono().basePath("/book");

book.get("/", (c) => c.text("List Books"));
book.post("/", (c) => c.text("Create Book"));

export default book;
