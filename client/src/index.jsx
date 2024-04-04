

import ReactDOM from 'react-dom';
import Homepage from './components/homepage.jsx'; // Note the correct import path


import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import $ from 'jquery'
// import List from './components/List.jsx'
import Navbar from'./components/navbar.jsx'
import Market from'./components/Market.jsx'
import Userprofile from './components/Userprofile.jsx';
import Editprofile from './components/Editprofile.jsx'
import Login from "./components/login.jsx";
import SignUp from "./components/singUp.jsx";
import { io } from 'socket.io-client';
import ChatComponent from './components/ChatComponent.jsx'
import Fashionshows from "./components/Fashionshows.jsx"
import Upcomingshows from "./components/Upcomingshows.jsx"
import Previousshows from "./components/Previousshows.jsx"
import Allnft from './components/Allnft.jsx'
import Explore from "./components/Explore.jsx"
import Payment from './components/Payment.jsx'
const socket = io("http://localhost:3000" ,{ autoConnect: false }); 
const App = () => {
  
  const [view, setView] = useState('login');
 
 
  const [data, setData] = useState([]);
  const [dataP, setDataP] = useState([]);
  const [updated, setUpdated] = useState(false);
  const [error, setError] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({});
  const [nftt,setNftt]=useState(false)
  const [objj,setObjj]=useState("")
  const fetch = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/product/");
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  const fetchpost = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/post/");
      setDataP(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  
  const deletepost=(id)=>{
    axios.delete(`http://localhost:3000/api/post/${id}`).then(()=> setUpdated(!updated)).catch((error)=>console.log(error))
  }
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
      const token = res.data.token;
  
      // Save the token and user ID to local storage
      const storedTokens = JSON.parse(localStorage.getItem('tokens')) || {};
      storedTokens[userData.id] = token;
      localStorage.setItem('tokens', JSON.stringify(storedTokens));
  
        setIsLogged(true);
        changeView('home', userData);
        setError('');
      })
      .catch((err) => {
        setError('Invalid email or password');
      });
    };
    const changeView = (option, userData) => {
      setView(option);
      if (option === 'home') {
        setUser(userData); // Assuming userData is the user object you want to set
      }
    };
    
    const logout = () => {
      setIsLogged(false);
    setUser({});
    setView('login');
  };

  const updateS=(id,obj)=>{
    axios.put(`http://localhost:3000/api/user/${id}`,obj).then((res)=>{
      console.log(res.data);
      fetch()
  })
  }

  useEffect(() => {
    if (isLogged) {
      socket.on('receiveMessage', (message) => {
        setMessages(messages => [...messages, message]);
      });
      return () => {
        socket.off('receiveMessage');
      };
    }
   fetchpost();
    fetch();
   


  }, [updated,isLogged]);
 console.log(data)
 
 console.log(dataP,'ääää')


 
  return (
    <div>
      {view === 'login' && (
        <Login error={error} login={login} changeView={changeView} />
      )}
      {view === 'singup' && (
        <SignUp changeView={changeView} singUp={singUp} />
      )}

        <Navbar user={user} changeView={changeView} setNftt={setNftt} setObjj={setObjj} />
        
       {view=== 'home' && <Homepage user={user} />} {/* Pass user prop to the Homepage component */} 
       {view=== 'Market' && <Market />} 
       {view=== 'Userprofile' && <Userprofile user={user} changeView={changeView}  />} 
       
       {view === 'chat' && <ChatComponent user={user} />}
       {view === 'Fashionshows' && <Fashionshows user={user} />}
       {view === 'Upcomingshows' && <Upcomingshows user={user} />}
       {view === 'Previousshows' && <Previousshows user={user} />}
       {view === 'Allnft' && <Allnft changeView={changeView} nftt={nftt} objj={objj} setNftt={setNftt}/>}
       {view === 'Payment' && <Payment />}
       
       {view === 'Explore' && <Explore user={user} />}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));