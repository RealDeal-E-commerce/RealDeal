import React, { useState,useEffect } from "react";
import ReactDOM from "react-dom";
import axios from 'axios'
import Login from "./components/login.jsx";
import SingUp from "./components/singUp.jsx";
import "../dist/style.css"
const App = () => {
  const [view, setView] = useState('login');
  const [key,setKey] = useState('')
  const [id,setId] = useState(0)
  const [user,setUser] = useState({})
  const [error,setError] = useState('')
  const [isLogged,setIsLogged] = useState(false)
  useEffect(()=>{
    console.log('heeeeeee')
  },[isLogged])
  const changeView = (option,id,key) => {
    setKey(key)
    setId(id)
    setView(option)
  };


  const singUp = (obj)=>{
    axios.post('http://localhost:3000/api/user/register/',obj).then((res)=>{
      console.log(res.data);
    })
  }

  const login = (obj)=>{
    axios.post('http://localhost:3000/api/user/',obj).then((res)=>{
      console.log(res.data);
      setUser(res.data.user)
      // setView('main')
      setError('')
      setIsLogged(true)
      console.log(isLogged)
      return res
  }).catch((err)=>{
    setError('Invalid email or password')
    return err
  
  })
}
const logout = ()=>{
  setIsLogged(false)
  setUser({})
  setView('login')
}


  return (
    <div >
      {/* <Navbar style={{ width: '65%' }} logout={logout} user={user} isLogged={isLogged} changeView={changeView} /> */}
      {view === 'login' && <Login error={error} login={login} changeView={changeView} />}
      {view === 'singup' && <SingUp  changeView={changeView} singUp={singUp}/>}
      {/* <FooTer /> */}
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
