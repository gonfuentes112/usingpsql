exports.newGet = (req, res) => {
  res.send("get users view");
};

exports.newPost = (req, res) => {
  console.log("username to be saved: ", req.body.username);
};
