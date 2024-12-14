// // // // WebSocket server URL
// // // const serverAddress = 'wss://messenger-vywa.onrender.com';

// // // // Select elements
// // // const messagesDiv = document.getElementById('messages');
// // // const messageInput = document.getElementById('message-input');
// // // const sendButton = document.getElementById('send-button');

// // // // Create WebSocket connection
// // // const client = new WebSocket(serverAddress);

// // // client.onopen = () => {
// // //     addMessage('System: Connected to the server.', 'system');
// // //     sendButton.disabled = false;
// // // };

// // // client.onmessage = (event) => {
// // //     addMessage(`Opponent: ${event.data}`, 'opponent');
// // // };

// // // client.onclose = () => {
// // //     addMessage('System: Disconnected from the server.', 'system');
// // //     sendButton.disabled = true;
// // // };

// // // client.onerror = (error) => {
// // //     addMessage(`System: WebSocket error: ${error.message}`, 'system');
// // // };

// // // // Handle send button click
// // // sendButton.addEventListener('click', () => {
// // //     const message = messageInput.value.trim();
// // //     if (message) {
// // //         client.send(message);
// // //         addMessage(`You: ${message}`, 'you');
// // //         messageInput.value = '';
// // //     }
// // // });

// // // // Handle pressing Enter to send a message
// // // messageInput.addEventListener('keypress', (event) => {
// // //     if (event.key === 'Enter') {
// // //         sendButton.click();
// // //     }
// // // });

// // // // Function to add a message to the chat
// // // function addMessage(content, type) {
// // //     const messageElement = document.createElement('div');
// // //     messageElement.classList.add('message', type);
// // //     messageElement.textContent = content;
// // //     messagesDiv.appendChild(messageElement);
// // //     messagesDiv.scrollTop = messagesDiv.scrollHeight; // Auto-scroll to the latest message
// // // }



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

// client.onopen = () => {
//     addMessage('System: Connected to the server.', 'system');
//     sendButton.disabled = false;
// };

// client.onmessage = (event) => {
//     // Check if the received message is a string (not binary)
//     if (typeof event.data === 'string') {
//         addMessage(`Opponent: ${event.data}`, 'opponent');
//     } else {
//         console.error('Received non-text message:', event.data);
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
//         // Send the message as text
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



// WebSocket server URL
const serverAddress = 'wss://messenger-vywa.onrender.com';

// Select elements
const messagesDiv = document.getElementById('messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

// Create WebSocket connection
const client = new WebSocket(serverAddress);

client.onopen = () => {
    addMessage('System: Connected to the server.', 'system');
    sendButton.disabled = false;
};

client.onmessage = (event) => {
    // Check if the received message is a string (not binary)
    if (typeof event.data === 'string') {
        addMessage(`Opponent: ${event.data}`, 'opponent');
    } else {
        console.error('Received non-text message:', event.data);
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
        // Send the message as text
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
