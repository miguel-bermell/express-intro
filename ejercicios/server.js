const express = require("express");
const { randomNumber } = require("./utils/random");
const { random } = require("./utils/random");
const server = express();

server.use("/", express.static("public"));

server.get("/home", (req, res) => {
  res.sendFile("./public/index.html", { root: __dirname });
});

const chistes = [
  {
    id: 0,
    joke: "President Roosevelt once rode his horse 100 miles. John Doe carried his the same distance in half the time.",
  },
  {
    id: 1,
    joke: "What did the chick say when the hen laid an orange?. Look what marmalade?",
  },
  {
    id: 2,
    joke: "Who tells the funniest jokes on the farm?. The comedi-hen!.",
  },
  {
    id: 3,
    joke: "Why did the chicken go to the seance?. To get to the other side!.",
  },
  {
    id: 4,
    joke: "Why did Beethoven get rid of his chickens?. All they said was, “Bach, Bach, Bach…”!.",
  },
  {
    id: 5,
    joke: "Why did the farmer have to separate the chicken and the turkey?. He sensed fowl play!.",
  },
];

server.get("/data", (req, res) => {
  const chistes = [
    {
      id: 0,
      joke: "President Roosevelt once rode his horse 100 miles. John Doe carried his the same distance in half the time.",
    },
    {
      id: 1,
      joke: "What did the chick say when the hen laid an orange?. Look what marmalade?",
    },
    {
      id: 2,
      joke: "Who tells the funniest jokes on the farm?. The comedi-hen!.",
    },
    {
      id: 3,
      joke: "Why did the chicken go to the seance?. To get to the other side!.",
    },
    {
      id: 4,
      joke: "Why did Beethoven get rid of his chickens?. All they said was, “Bach, Bach, Bach…”!.",
    },
    {
      id: 5,
      joke: "Why did the farmer have to separate the chicken and the turkey?. He sensed fowl play!.",
    },
  ];
  res.send(chistes);
});

server.get("/data/:id", (req, res) => {
  const id = +req.params.id;
  const [data] = chistes.filter((chiste) => chiste.id === id);
  res.status(200).send(data);
});

server.get("/random", (req, res) => {
  // const randomNumber2 = Math.floor(Math.random() * chistes.length);
  // const r3 = random(chistes);
  // console.log(randomNumber2, r3, chistes.length);
  const [data] = chistes.filter((chiste) => chiste.id == random(chistes));
  res.status(200).send(data);
});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});
console.log("Server File");
