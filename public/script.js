const socket = io({
  transports: ['websocket'],
  forceNew: true
});
let myMobile = '';

function register() {
  myMobile = document.getElementById('myMobile').value;
  socket.emit('register', myMobile);
  alert('Connected as ' + myMobile);
}

function sendMessage() {
  const msgInput = document.getElementById('msg');
  const toMobile = document.getElementById('toMobile').value;

  const message = msgInput.value;

  socket.emit('private message', {
    message,
    toMobile,
    fromMobile: myMobile
  });

  addMessage(message, 'sent');
  msgInput.value = '';
}

socket.on('receive message', (data) => {
  addMessage(`From ${data.fromMobile}: ${data.message}`, 'received');
});

function addMessage(text, type) {
  const chatWindow = document.getElementById('chatWindow');
  const div = document.createElement('div');
  div.className = `message ${type}`;
  div.innerText = text;
  chatWindow.appendChild(div);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}