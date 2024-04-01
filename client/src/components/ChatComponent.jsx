import React, { useState, useEffect, useRef } from 'react';

const ChatComponent = ({ user }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([{ name: "Community", message: "Welcome to the chat!" }]);
  const ws = useRef(null);

  useEffect(() => {
    function connect() {
      ws.current = new WebSocket('ws://localhost:3000');

      ws.current.onopen = () => console.log('Connected to WebSocket server');

      ws.current.onmessage = (event) => {
        if (event.data instanceof Blob) {
          const reader = new FileReader();
          reader.onload = function() {
            try {
              const receivedMsg = JSON.parse(this.result);
              setMessages((prevMessages) => [...prevMessages, receivedMsg]);
            } catch (error) {
              console.error('Error parsing message:', error);
            }
          };
          reader.readAsText(event.data);
        } else {
          try {
            const receivedMsg = JSON.parse(event.data);
            setMessages((prevMessages) => [...prevMessages, receivedMsg]);
          } catch (error) {
            console.error('Error parsing message:', error);
          }
        }
      };
      

      ws.current.onclose = () => {
        console.log('Disconnected from WebSocket server, attempting to reconnect...');
        setTimeout(() => connect(), 1000);
      };

      ws.current.onerror = (error) => {
        console.error('WebSocket error:', error);
        ws.current.close();
      };
    }

    connect();

    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, []);
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
  
    const messageData = { name: user.name || 'Anonymous', message };
    ws.current.send(JSON.stringify(messageData));
  
    // Optimistically add the message to the chat
    setMessages(prevMessages => [...prevMessages, messageData]);
    
    setMessage(''); // Clear message input after sending
  };
  
  return (
    <div className="chat-container">
      <h2>Community Room</h2>
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
