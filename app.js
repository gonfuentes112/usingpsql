const express = require("express");
const newRouter = require("./routes/newRouter");
const app = express();

app.get("/", (req, res) => {
  console.log("usernames will be logged here - wip");
});

app.use("/new", newRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`listening on http://localhost:${PORT}`));
