'use strict';

const express = require('express');
const PORT = 3000;
const HOST = '0.0.0.0';
const app = express();
app.use(express.static('public'));
app.get('/', (req, res) => {
  console.log("[GET] Peticion Recibida sin errores")
  res.send('Taller Kubernetes URACCAN!');
});
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);