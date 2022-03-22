const express = require("express");

const app = express();
const cors = require("cors");

//Port number
const port = 3100;
app.use(express.json());
app.use(cors());

const apiRouter = require("./router/api");

app.use("/api", apiRouter);

//Create server listner
app.listen(port, () => {
  console.log("Server started at port : ", port);
});
