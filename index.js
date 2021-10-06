const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();
const port = 443;

const key = fs.readFileSync('privkey.pem');
const cert = fs.readFileSync('fullchain.pem');
const options = {
  key,
  cert,
};

app.get('/', (req, res) => {
  res.header('X-Author', 'itmo225071').header('Access-Control-Allow-Origin', '*').send('itmo225071');
});

const server = https.createServer(options, app);

server.listen(port, () => {
  console.log(`server starting on port : ${port}`);
});
