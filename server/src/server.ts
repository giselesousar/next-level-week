import express from 'express';

const app = express();

app.get('/users', (req, res) => {
    res.json({"hello world": ""});
})

app.listen(3333);