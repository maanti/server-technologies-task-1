const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());

app.get('/login/', (req, res) => {
  res.header('Content-Type', 'text/plain; charset=UTF-8 ').send('itmo225071');
});

app.get('/promise/', (req, res) => {
  res.header('Content-Type', 'text/plain; charset=UTF-8 ').send(`
    function task(x) {
      return new Promise((resolve, reject) => {
        if (x < 18) {
          return resolve('yes');
        }
        return reject('no');
      });
    }
`);
});

app.get('/fetch/', (req, res) => {
  res.header('Content-type', 'text/html; charset=UTF-8').sendFile(`${__dirname}/index.html`);
});

app.listen(port, () => {
  console.log(`server starting on port : ${port}`);
});
