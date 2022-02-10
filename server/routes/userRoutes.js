const express = require("express");
const User = require("../model/User");

const router = express.Router();

const users = [
  { name: "John Doe", age: 32, email: "doe@mail.com" },
  { name: "John Doe", age: 32, email: "doe@mail.com" },
];

router.get("/api/users", (req, res) => {
  res.send(users);
});

router.post("/api/users", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    console.log(req.body);
    res.status(200).send(newUser);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.put("/api/user/:id", () => {
  console.log("put");
});

router.delete("/api/user/:id", () => {
  console.log("Delete");
});

module.exports = router;
