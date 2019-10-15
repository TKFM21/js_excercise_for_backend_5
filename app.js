const router = require('./router');
const express = require('express');

const app = express();
const PORT = process.env.PORT;

app.use('/pages', router);
app.listen(PORT, () => {
    console.log(`Server Listening on PORT:${PORT}...`);
});