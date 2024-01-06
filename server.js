const express = require("express");

const app = express();
const port = 8000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({
    message: "heyy expresser",
  });
});

app.get('/:friend', (req, res) => {
    const {friend} = req.params;
    const {limit} = req.query;

    res.status(200).send({
        message: `You asked for friend named ${friend}`
    })
})

app.post("/", (req, res) => {
  const { friend } = req.body;

  if (!friend) {
    return res.status(400).send({
      message: "friend not found",
    });

    res.status(200).send({
      message: `your friend is called ${friend}`,
    });
  }
});

app.delete('/:friend', (req, res) => {
    const {friend} = req.params;

    if(friend){
        res.status(200).send({
            message: `${friend} is deleted`
        })
    }else{
        res.status(400).send({
            message: 'friend not found in the database'
        })
    }
})

app.listen(port, () => {
  console.log(`Server started: ${port}`);
});
