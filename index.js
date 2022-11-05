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
    tweet: "oi",
  },
  {
    username: "jane",
    tweet: "jane",
  },
  {
    username: "rick",
    tweet: "rick",
  },
  {
    username: "morty",
    tweet: "morty",
  },
  {
    username: "sam",
    tweet: "sam",
  },
  {
    username: "walter",
    tweet: "walter",
  },
  {
    username: "saul",
    tweet: "saul",
  },
  {
    username: "naruto",
    tweet: "naruto",
  },
  {
    username: "sasuke",
    tweet: "sasuke",
  },
  {
    username: "morty",
    tweet: "morty",
  },
  {
    username: "luffy",
    tweet: "luffy",
  },

  {
    username: "zoro",
    tweet: "zoro",
  },
  {
    username: "sanji",
    tweet: "sanji",
  },
  {
    username: "uta",
    tweet: "uta",
  },
];

const users = [
  {
    username: "bob",
    avatar: "http:bob.jpeg",
  },
  {
    username: "jane",
    avatar: "http:jane.jpeg",
  },
  {
    username: "rick",
    avatar: "http:rick.jpeg",
  },
  {
    username: "morty",
    avatar: "http:morty.jpeg",
  },
  {
    username: "sam",
    avatar: "http:sam.jpeg",
  },
  {
    username: "walter",
    avatar: "http:walter.jpeg",
  },
  {
    username: "saul",
    avatar: "http:saul.jpeg",
  },
  {
    username: "naruto",
    avatar: "http:naruto.jpeg",
  },
  {
    username: "sasuke",
    avatar: "http:sasuke.jpeg",
  },
  {
    username: "morty",
    avatar: "http:morty.jpeg",
  },
  {
    username: "luffy",
    avatar: "http:luffy.jpeg",
  },

  {
    username: "zoro",
    avatar: "http:zoro.jpeg",
  },
  {
    username: "sanji",
    avatar: "http:sanji.jpeg",
  },
  {
    username: "uta",
    avatar: "http:uta.jpeg",
  },
];

app.post("/sign-up", (req, res) => {
  const { username, avatar } = req.body;

  if (!username || !avatar) {
    res.status(400).send("Todos os campos são obrigatórios");
    return;
  }

  if (users.find((u) => u.username === username)) {
    res.status(409).send("Username already exit!");
    return;
  }

  users.push({ ...req.body });
  res.status(201).send("OK");
});

app.post("/tweets", (req, res) => {
  const { username, tweet } = req.body;

  if (!username || !tweet) {
    res.status(400).send("Todos os campos são obrigatórios");
    return;
  }

  tweets.push({ ...req.body });
  res.status(201).send("OK");
});

app.get("/tweets", (req, res) => {
  const lastTweets = tweets.map((tweet) => {
    return {
      username: tweet.username,
      avatar: users.find((u) => tweet.username === u.username).avatar,
      tweet: tweet.tweet,
    };
  });

  res.send(lastTweets.splice(-10, lastTweets.length - 1));
});

//port
app.listen(5000);
