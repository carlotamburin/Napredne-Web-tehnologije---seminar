function displayChat(chats, container) {
  const mapppecChat = chats.map((chat) => createChatDomElement(chat));

  mapppecChat.forEach((item) => container.appendChild(item));
}

function appendChat(chat, container) {
  var elem = createChatDomElement(chat);
  container.appendChild(elem);
}

function removeChat(chat, container) {
  var elem = document.getElementById("chat-" + chat.id);
  container.removeChild(elem);
}

function updateChat(chat) {
  var elem = document.getElementById("chat-" + chat.id);
  if (chat.name) elem.childNodes[0].innerText = chat.name;
  if (chat.message) elem.childNodes[1].innerText = chat.message;
}
function createChatDomElement(data) {
  var elem = document.createElement("div");
  var identificator = "chat-" + data.id;
  elem.setAttribute("id", identificator);
  elem.classList.add("chat-container");
  var name = document.createElement("div");
  name.innerText = data.name;
  var message = document.createElement("div");
  message.innerText = data.message;
  elem.appendChild(name);
  elem.appendChild(message);
  return elem;
}
