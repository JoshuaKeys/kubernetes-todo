const express = require('express');

const app = express();

app.get('/test', (req, res) => {
    res.send('Hello World');
});
app.get('/test2', (req, res) => {
    res.send('Hello Worldssss');
});

app.listen(3000, () => {
    console.log('App listening at port 3000');
})
