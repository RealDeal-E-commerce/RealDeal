

import ReactDOM from 'react-dom';
import Homepage from './components/homepage.jsx'; // Note the correct import path


import React, { useEffect, useState } from 'react'

import $ from 'jquery'
import List from './components/List.jsx'
import Fashionshows from "./components/Fashionshows.jsx"
import Upcomingshows from "./components/Upcomingshows.jsx"
import Previousshows from "./components/Previousshows.jsx"

const App = () => {
  const user = {
    name: "John Doe", // Sample user data
    image: "profile.jpg" // Sample user data
  };

  return (
    <div>

      <Homepage user={user} /> {/* Pass user prop to the Homepage component */}

       {/* <Fashionshows/>

      <Upcomingshows/>

      <Previousshows/> */}
     



    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));