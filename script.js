const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');

chatForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const input = userInput.value.trim();
  if (input !== '') {
    addMessage(input, 'user');
    respondToUser(input);
    userInput.value = '';
  }
});

function addMessage(text, sender) {
  const msg = document.createElement('div');
  msg.classList.add('message', sender);
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function respondToUser(input) {
  let response = "I'm not sure how to respond to that.";

  const lowerInput = input.toLowerCase();
  if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
    response = "Hello there! How can I help you today?";
  } else if (lowerInput.includes("your name")) {
    response = "I'm ChatBot, your friendly assistant!";
  } else if (lowerInput.includes("time")) {
    response = `The current time is ${new Date().toLocaleTimeString()}`;
  } else if (lowerInput.includes("bye")) {
    response = "Goodbye! Have a great day!";
  }

  setTimeout(() => addMessage(response, 'bot'), 500);
} poi