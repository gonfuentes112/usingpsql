const express = require("express");
const newRouter = require("./routes/newRouter");
const app = express();
const db = require("./db/queries");
require("dotenv").config();

app.get("/", async (req, res) => {
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.send("Usernames: "+ usernames.map((user) => user.username).join(", "));
});

app.use("/new", newRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`listening on http://localhost:${PORT}`));
