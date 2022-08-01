const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log('server running at http://127.0.0.1:3000');
});

app.get('/', (req, res) => {
    res.send('hello');
    console.log(req.url);
})