const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const client = require('prom-client');


const app = express();
const server = http.createServer(app);
const io = new Server(server);
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();


app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {

  // When user registers with mobile number
  socket.on('register', (mobile) => {
    socket.join(mobile);
    socket.mobile = mobile;
    console.log(`User joined room: ${mobile}`);
  });

  // Private message
  socket.on('private message', (data) => {
    const { toMobile, message, fromMobile } = data;

    io.to(toMobile).emit('receive message', {
      message,
      fromMobile
    });

  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'UP' });
});

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});
server.listen(3000, () => {
  console.log('Server running on 3000');
});