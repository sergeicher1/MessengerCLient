// WebSocket server URL
const serverAddress = 'wss://messenger-vywa.onrender.com';

// Select elements
const messagesDiv = document.getElementById('messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

// Create WebSocket connection
const client = new WebSocket(serverAddress);

// Explicitly set binary type
client.binaryType = 'blob';

client.onopen = () => {
    addMessage('System: Connected to the server.', 'system');
    sendButton.disabled = false;
};

client.onmessage = (event) => {
    if (event.data instanceof Blob) {
        const reader = new FileReader();
        reader.onload = () => {
            addMessage(`Opponent: ${reader.result}`, 'opponent');
        };
        reader.readAsText(event.data);
    } else {
        addMessage(`Opponent: ${event.data}`, 'opponent');
    }
};

client.onclose = () => {
    addMessage('System: Disconnected from the server.', 'system');
    sendButton.disabled = true;
};

client.onerror = (error) => {
    addMessage(`System: WebSocket error: ${error.message}`, 'system');
};

// Handle send button click
sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message) {
        client.send(message);
        addMessage(`You: ${message}`, 'you');
        messageInput.value = '';
    }
});

// Handle pressing Enter to send a message
messageInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendButton.click();
    }
});

// Function to add a message to the chat
function addMessage(content, type) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', type);
    messageElement.textContent = content;
    messagesDiv.appendChild(messageElement);
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Auto-scroll to the latest message
}

