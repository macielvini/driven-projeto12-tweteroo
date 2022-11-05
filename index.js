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
    username: "",
    avatar: "",
  },
];

app.get("/sign-up", (req, res) => {
  const { username, avatar } = req.body;
  if (!username || !avatar) {
    res.sendStatus(404);
  }
});

//port
app.listen(5000);
