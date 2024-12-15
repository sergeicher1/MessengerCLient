// // // WebSocket server URL
// // const serverAddress = 'wss://messenger-vywa.onrender.com';

// // // Select elements
// // const messagesDiv = document.getElementById('messages');
// // const messageInput = document.getElementById('message-input');
// // const sendButton = document.getElementById('send-button');

// // // Create WebSocket connection
// // const client = new WebSocket(serverAddress);

// // client.onopen = () => {
// //     addMessage('System: Connected to the server.', 'system');
// //     sendButton.disabled = false;
// // };

// // client.onmessage = (event) => {
// //     addMessage(`Opponent: ${event.data}`, 'opponent');
// // };

// // client.onclose = () => {
// //     addMessage('System: Disconnected from the server.', 'system');
// //     sendButton.disabled = true;
// // };

// // client.onerror = (error) => {
// //     addMessage(`System: WebSocket error: ${error.message}`, 'system');
// // };

// // // Handle send button click
// // sendButton.addEventListener('click', () => {
// //     const message = messageInput.value.trim();
// //     if (message) {
// //         client.send(message);
// //         addMessage(`You: ${message}`, 'you');
// //         messageInput.value = '';
// //     }
// // });

// // // Handle pressing Enter to send a message
// // messageInput.addEventListener('keypress', (event) => {
// //     if (event.key === 'Enter') {
// //         sendButton.click();
// //     }
// // });

// // // Function to add a message to the chat
// // function addMessage(content, type) {
// //     const messageElement = document.createElement('div');
// //     messageElement.classList.add('message', type);
// //     messageElement.textContent = content;
// //     messagesDiv.appendChild(messageElement);
// //     messagesDiv.scrollTop = messagesDiv.scrollHeight; // Auto-scroll to the latest message
// // }




// // WebSocket server URL
// const serverAddress = 'wss://messenger-vywa.onrender.com';

// // Select elements
// const messagesDiv = document.getElementById('messages');
// const messageInput = document.getElementById('message-input');
// const sendButton = document.getElementById('send-button');

// // Create WebSocket connection
// const client = new WebSocket(serverAddress);

// // Explicitly set binary type
// client.binaryType = 'blob';

// client.onopen = () => {
//     addMessage('System: Connected to the server.', 'system');
//     sendButton.disabled = false;
// };

// client.onmessage = (event) => {
//     if (event.data instanceof Blob) {
//         const reader = new FileReader();
//         reader.onload = () => {
//             addMessage(`Opponent: ${reader.result}`, 'opponent');
//         };
//         reader.readAsText(event.data);
//     } else {
//         addMessage(`Opponent: ${event.data}`, 'opponent');
//     }
// };

// client.onclose = () => {
//     addMessage('System: Disconnected from the server.', 'system');
//     sendButton.disabled = true;
// };

// client.onerror = (error) => {
//     addMessage(`System: WebSocket error: ${error.message}`, 'system');
// };

// // Handle send button click
// sendButton.addEventListener('click', () => {
//     const message = messageInput.value.trim();
//     if (message) {
//         client.send(message);
//         addMessage(`You: ${message}`, 'you');
//         messageInput.value = '';
//     }
// });

// // Handle pressing Enter to send a message
// messageInput.addEventListener('keypress', (event) => {
//     if (event.key === 'Enter') {
//         sendButton.click();
//     }
// });

// // Function to add a message to the chat
// function addMessage(content, type) {
//     const messageElement = document.createElement('div');
//     messageElement.classList.add('message', type);
//     messageElement.textContent = content;
//     messagesDiv.appendChild(messageElement);
//     messagesDiv.scrollTop = messagesDiv.scrollHeight; // Auto-scroll to the latest message
// }



// TO HANDLE SYSTEM MESSAGES

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
    try {
        // Parse the incoming message
        const messageData = JSON.parse(event.data);

        if (messageData.type === 'system') {
            // Handle system messages
            addMessage(`System: ${messageData.content}`, 'system');
        } else if (messageData.type === 'chat') {
            // Handle chat messages
            addMessage(`Opponent: ${messageData.content}`, 'opponent');
        } else {
            console.error('Unknown message type:', messageData);
        }
    } catch (error) {
        console.error('Failed to parse message:', event.data, error);
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
        // Send chat messages as plain strings
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
