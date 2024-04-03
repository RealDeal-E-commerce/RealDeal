import React, { useState, useEffect, useRef } from 'react';

const ChatComponent = ({ user }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([{ name: "Community", message: "Welcome to the chat!" ,role:'chatBot'}]);
  // Updated to assume that each user object in the array will have a name and a role
  const [users, setUsers] = useState([]); 
  const ws = useRef(null);

  useEffect(() => {
    function connect() {
      ws.current = new WebSocket('ws://localhost:3000');

      ws.current.onopen = () => {
        console.log('Connected to WebSocket server');
        // Include user's role in the newUser message if your backend can handle it
        const newUserMessage = JSON.stringify({ type: 'newUser', name: user.name || 'Anonymous', role: user.role });
        ws.current.send(newUserMessage);
      };

      ws.current.onmessage = (event) => {
        if (event.data instanceof Blob) {
          const reader = new FileReader();
          reader.onload = function() {
            handleReceivedData(this.result);
            console.log('hhh',this.result);
          };
          reader.readAsText(event.data);
        } else {
          handleReceivedData(event.data);
        }
      };

      ws.current.onclose = () => {
        console.log('Disconnected from WebSocket server, attempting to reconnect...');
        setTimeout(connect, 1000);
      };

      ws.current.onerror = (error) => {
        console.error('WebSocket error:', error);
        ws.current.close();
      };
    }

    function handleReceivedData(data) {
      try {
        const parsedData = JSON.parse(data);
        if (parsedData.type === 'userList') {
          // Assuming userList message includes user objects with name and role
          setUsers(parsedData.users);
        } else if (parsedData.type === 'message') {
          setMessages(prevMessages => [...prevMessages, parsedData]);
        }
      } catch (error) {
        console.error('Error parsing message:', error);
      }
    }

    connect();

    // Cleanup on component unmount
    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, [user.name, user.role]); // Dependencies

  const getUsernameColor = (username) => {
    let hash = 0;
    for (let i = 0; i < username.length; i++) {
      hash = username.charCodeAt(i) + ((hash << 5) - hash);
    }
    const h = hash % 360;
    return `hsl(${h}, 80%, 60%)`;
  };

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message.trim() || !ws.current || ws.current.readyState !== WebSocket.OPEN) return;
  
    const messageData = { type: 'message', name: user.name || 'Anonymous', message , role:user.role};
    ws.current.send(JSON.stringify(messageData));
  
    // Optimistically add the message to the chat
    setMessages(prevMessages => [...prevMessages, messageData]);
    setMessage(''); // Clear the message input after sending
  };

  return (
    <div className="chat-container">
      <h2>Community Room</h2>
      <div className="user-list">
        <strong>Users Online:</strong>
        {messages.map((msg, index) => (
          // Ensure each user's role is displayed next to their name
          <div key={index} style={{color: getUsernameColor(msg.name)}}>{msg.name}-{msg.role}</div>
        ))}
      </div>
      <div id="messages" className="messages">
        {messages.map((msg, index) => (
          <p key={index} className={`message ${msg.name === user.name ? "my-message" : ""}`}>
            <strong style={{color: getUsernameColor(msg.name)}}>{msg.name}</strong>: {msg.message}
          </p>
        ))}
      </div>
      <div className="chat-input-container">
        <input
          className="chat-input"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
        />
        <button onClick={sendMessage} className="chat-send-btn">Send</button>
      </div>
    </div>
  );
};


export default ChatComponent;
