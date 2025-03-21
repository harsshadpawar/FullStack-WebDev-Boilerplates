import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("server is ready");
});

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content: "This is a joke",
    },
    {
      id: 2,
      title: "Another joke",
      content: "This is another joke",
    },
    {
      id: 3,
      title: "A third joke",
      content: "This is a third joke",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
