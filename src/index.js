const express = require("express");
require("./db/mongoose");
const app = express();
const port = process.env.PORT || 3000;
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

// app.use((req, res, next) => {
//   if (req.method === "GET") {
//     res.send("GET request is disabled.");
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send("We are updating our system.");
// });

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
