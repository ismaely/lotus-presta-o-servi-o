const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/dist/site-h5'));
app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/site-h5/index.html');
})
app.listen(PORT, () => console.log(`Servidor up`));