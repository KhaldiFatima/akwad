import express from 'express';
import bodyParser from 'body-parser';

// Import endpoint handlers
import analysisRoutes from './handlers/analysisRoutes.js';

const app = express();
const port = 3000;
const address = `http://127.0.0.1:${port}`;

app.use(bodyParser.json());

app.get('/', function (_req, res) {
  res.send('Hello world!');
});

analysisRoutes(app);

app.listen(port, () => {
  console.log(`starting app on: ${address}`);
});

export default app;
