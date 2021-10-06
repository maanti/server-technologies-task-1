const express = require('express');

const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.header('X-Author', 'itmo225071').header('Access-Control-Allow-Origin', '*').send('itmo225071');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
