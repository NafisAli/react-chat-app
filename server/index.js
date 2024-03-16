import { createServer } from "http";
import { Server } from "socket.io";
import  express from "express";
import cors from "cors";

const app = express();
const PORT = 4000;

const http = createServer(app);
const socket = new Server(http, { cors: { origin: "http://localhost:3000" } });

app.use(cors());

socket.on("connection", (socket) => {
  console.log(`+: ${socket.id} user just connected!`);
  socket.on("disconnect", () => {
    console.log(`-: A user disconnected`);
  });
});

app.get("/api", (request, response) => {
  response.json({
    message: "Hello World",
  });
});

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
