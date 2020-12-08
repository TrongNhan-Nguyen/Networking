const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const auth = require("./src/routes/auth.js");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("src/public"));
mongoose
  .connect("mongodb://localhost/Networking", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("Connect to mongo db successfully"))
  .catch((err) => console.log(err));
// app.get("/", (req, res,next) => {
//     next(new Error("hehe"));
//   res.send("Hello from server");
// });
app.use("/", auth);
/**Handle error */
app.use((req, res, next) => {
  const err = new Error("Not found");
  err.status = 404;
  next(err);
});
app.use((err, req, res, next) => {
  const error = app.get("env") === "development" ? err : {};
  const status = err.status || 500;
  res.send({
    error: {
      status: status,
      message: error.message,
    },
  });
});
app.listen(5000, () => console.log("App listening on port 5000"));
