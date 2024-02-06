const http = require('http');
const app = require('./app');

// const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 3000;
const port = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(port, ()=> {
    console.log(`Started on port ${port}`);
});