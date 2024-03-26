import express from 'express';
import bodyParser from 'body-parser';
import feedRoutes from './routes/feed.mjs';

const app = express();

const PORT = process.env.PORT || 8080;

// GET /feed/post
app.use(bodyParser.json());

// this code removes CORS error's BY ALLOWING CERTAIN ORIGINS
app.use((request, response, next) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST,PUT, DELETE,PATCH'
  );
  response.setHeader('Access-Control-Allow-Headers','Content-Type', 'Authorization');
  next();
});

app.use('/feed', feedRoutes);

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
