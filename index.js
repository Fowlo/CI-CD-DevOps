const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json ({
        message: 'Hello DevOps !',
        status: 'ok',
        version: '1.0.0'
    })
});

app.get('/health', (req, res) => {
    res.json ({
        status: 'healthy'
    })
});

app.listen(port, () => {
    console.log(`Serveur lancé sur le port ${port}`);
});

module.exports = app;