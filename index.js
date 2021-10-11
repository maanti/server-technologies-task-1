const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8080;

const corsOptions = {
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['x-test', 'Content-Type', 'Accept', 'Access-Control-Allow-Headers'],
  origin: '*',
};

app.use(cors(corsOptions));
app.use((req, res, next) => {
  let data = '';
  req.setEncoding('utf8');
  req.on('data', (chunk) => {
    data += chunk;
  });

  req.on('end', () => {
    req.body = data;
    next();
  });
});

app.all('/result4/', (req, res) => {
  res.json({
    message: 'itmo225071',
    'x-result': req.header('x-test'),
    'x-body': req.body,
  });
});

app.listen(port, () => {
  console.log(`server starting on port : ${port}`);
});
