import express from "express";
import cors from "cors";

const app = express();

//config
app.use(cors());
app.use(express.json());

//code
const tweets = [
  {
    username: "bob",
    avatar: "",
    tweet: "",
  },
];
const users = [
  {
    username: "vini",
    avatar: "http:vini.jpg",
  },
];

app.post("/sign-up", (req, res) => {
  const { username, avatar } = req.body;
  if (!username || !avatar) {
    res.status(400).send("Empty fields");
    return;
  }

  if (users.find((u) => u.username === username)) {
    res.status(409).send("Username already exit!");
    return;
  }

  users.push({ ...req.body });
  res.send("OK");
});

app.post("/tweets", (req, res) => {
  const { username, tweet } = req.body;

  if (!username || !tweet) {
    res.status(400).send("Empty fields");
    return;
  }

  tweets.push({ ...req.body });
  res.send("OK");
});

//port
app.listen(5000);
