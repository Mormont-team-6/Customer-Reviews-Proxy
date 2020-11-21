const server = require('./server.js');
const PORT = 3000 || process.env.PORT; //?

server.listen(PORT, () => {
  console.log(`server running on localhost:${PORT}`);
});