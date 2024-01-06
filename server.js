const express = require('express');

const app = express();
const port = 8000;

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send({
        message:'heyy expresser'
    })
})

app.post('/', (req, res) => {
    const {friend} = req.body;

    if(!friend){
        res.status(400).send({
            message: 'friend not found'
        })
    }
})

app.listen(port, () => {
    console.log(`Server started: ${port}`);
})