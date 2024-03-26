import express from 'express';
import bodyParser from 'body-parser';
import feedRoutes from './routes/feed.mjs';

const app = express();

const PORT = process.env.PORT || 8080;

// GET /feed/post
app.use(bodyParser.json());
app.use('/feed', feedRoutes);

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
