import { createServer } from "http";
import { Server } from "socket.io";
import  express from "express";
import cors from "cors";

const app = express();
const PORT = 4000;

const http = createServer(app);
const io = new Server(http, { cors: { origin: "http://localhost:3000" } });

app.use(cors());

let users = [];

io.on("connection", (socket) => {
  console.log(`+: ${socket.id} user just connected!`);

  socket.on("message", (data) => {
    console.log(data);

    io.emit("messageResponse", data);
  });

  socket.on("newUser", (data) => {
    users.push(data);

    io.emit("newUserResponse", users);
  });

  socket.on("typing", (data) => {
    socket.broadcast.emit("typingResponse", data);
  });

  socket.on("disconnect", () => {
    console.log(`-: A user disconnected`);

    users = users.filter((user) => user.socketID !== socket.id);
    io.emit("newUserResponse", users);

    socket.disconnect();
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
