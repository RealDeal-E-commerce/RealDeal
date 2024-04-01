import { ChatEngine } from 'react-chat-engine';
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import Login from "./components/login.jsx";
import SignUp from "./components/singUp.jsx"; // Ensure the filename is correct. It should be "SignUp.jsx" if that's the component name.
import Homepage from "./components/Homepage.jsx";
import "../dist/style.css";
import { io } from 'socket.io-client';
import ChatComponent from './components/ChatComponent.jsx'
import { data } from 'jquery';
// const socket = io("http://localhost:3000" ,{ autoConnect: false }); // Make sure your backend is running on this port

const App = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [view, setView] = useState('login'); // Default view set to 'login' for initial state
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [currentConversationId, setCurrentConversationId] = useState(null);
const [data,setData]=useState({})
  useEffect(() => {
    // Listen for incoming messages only if logged in
    // if (isLogged) {
    //   socket.on('receiveMessage', (message) => {
    //     setMessages(messages => [...messages, message]);
    //   });

    //   // Cleanup to avoid multiple listeners being attached on re-renders
    //   return () => {
    //     socket.off('receiveMessage');
    //   };
    // }
  }, [isLogged]); // Dependency on isLogged to setup or remove socket listeners based on user's logged-in state

  
  
  // Example function to select a conversation
  const selectConversation = (conversationId) => {
    setCurrentConversationId(conversationId);
    // Optionally, fetch conversation messages using the conversationId
    fetchMessagesForConversation(conversationId);
  };
  
  const sendMessage = (e) => {
    e.preventDefault();
    if (!message || !currentConversationId) return;
  
    const messageData = {
      conversationId: currentConversationId,
      senderId: user.id, // Make sure this correctly references the user ID
      content: message,
    };
  
    // socket.emit('sendMessage', messageData);
    // setMessage(''); // Clear message input after sending
  };
  // Example function to fetch messages for a conversation
  const fetchMessagesForConversation = async (conversationId) => {
    try {
      const response = await axios.get(`http://localhost:3000/chat/conversations/${conversationId}/messages`);
      setMessages(response.data); // Assuming you have a state to store messages
    } catch (error) {
      console.error("Failed to fetch messages:", error);
    }
  };
  const singUp = (obj) => {
    axios.post('http://localhost:3000/api/user/register/', obj).then((res) => {
      console.log(res.data);
      setData(res.data)
      // You might want to automatically log the user in after sign up
    });
  };
  
  const login = (obj) => {
    axios.post('http://localhost:3000/api/user/', obj)
    .then((res) => {
      const userData = res.data.user;
      // const token = res.data.token;
  
      // Save the token and user ID to local storage
      // const storedTokens = JSON.parse(localStorage.getItem('tokens')) || {};
      // storedTokens[userData.id] = token;
      // localStorage.setItem('tokens', JSON.stringify(storedTokens));
  
        setIsLogged(true);
        changeView('homepage', userData);
        setError('');
      })
      .catch((err) => {
        setError('Invalid email or password');
      });
    };
    const changeView = (option, userData) => {
      setView(option);
      if (option === 'homepage') {
        setUser(userData); 
        console.log(userData);
      }
    };
    
    const logout = () => {
      setIsLogged(false);
    setUser({});
    setView('login');
  };
  const goToChatView = () => {
    setView('chat');
  };

  return (
    <div>
      {view === 'login' && (
        <Login error={error} login={login} changeView={changeView} />
      )}
      {view === 'singup' && (
        <SignUp changeView={changeView} singUp={singUp} />
      )}
      {view === 'homepage' && (
        <div>
          <Homepage user={user} />
          <button onClick={goToChatView}>Go to Chat</button>
        </div>
      )}
     {view === 'chat' && <ChatComponent user={user} />}
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
