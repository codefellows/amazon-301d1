const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', function(req, res) {
    console.log('you made a request');
    res.json({ stuff: 'cool' });
});

app.listen(PORT, function() {
    console.log('listening on PORT:', PORT);
});