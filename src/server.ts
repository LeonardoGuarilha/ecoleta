import express from "express";

const app = express();

app.get("/users", (request, response) => {
  response.json(["Leonardo", "New"]);
});

app.listen(3333);
