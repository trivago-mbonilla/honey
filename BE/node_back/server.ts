import express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hey');
});

const server = app.listen(3000, () => {
    console.log(`server listening on port ${server.address().port}`);
});