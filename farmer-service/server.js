const client = require('prom-client');
client.collectDefaultMetrics();
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const farmerRoutes = require('./routes/farmerRoutes');

const app = express();
const httpRequestCounter = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests received',
});

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  httpRequestCounter.inc();
  next();
});


app.use('/farmers', farmerRoutes);

app.get('/', (req, res) => {
  res.send('Farmer Service is running');
});
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

app.listen(process.env.PORT, () => {
  console.log(`Farmer Service running on port ${process.env.PORT}`);
});
