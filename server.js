const express = require("express");
const next = require("next");
const userRoute = require("./server/routes/userRoutes");
const Connection = require("./database/db");
const bodyParser = require("body-parser");
const cors = require("cors");

Connection();

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  //middleware for express
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(cors());

  //routes
  server.use(userRoute);

  //pass req and res to nextjs
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  //server listen
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
