Rest api comes with authentication using jwt tokens

this is code that controls requests and resolves CORS errors
app.use((request, response, next) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST,PUT, DELETE,PATCH'
  );
  response.setHeader('Access-Control-Allow-Headers','Content-Type', 'Authorization');
  next();
});

application of each access-control method should be revisited
