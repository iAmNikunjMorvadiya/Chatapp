const socket = io();
const messagesDiv = document.getElementById("messages");
const messageInput = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener("click", () => {
  const text = messageInput.value.trim();
  if (!text) return;
  socket.emit("sendMessage", text);
  messageInput.value = "";
});

socket.on("receiveMessage", (msg) => {
  const p = document.createElement("p");
  p.textContent = msg;
  messagesDiv.appendChild(p);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
});