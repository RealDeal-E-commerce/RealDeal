import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Fashionshows from "./components/Fashionshows.jsx";
import Upcomingshows from "./components/Upcomingshows.jsx";
import Previousshows from "./components/Previousshows.jsx";
import Explore from "./components/Explore.jsx";
import Allnft from "./components/Allnft.jsx";
import Payment from "./components/Payment.jsx";
import Success from './components/Success.jsx';
import Fail from './components/Fail.jsx';



const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    $.ajax({
      url: '/api/items',
      success: (data) => {
        console.log(data);
        setItems(data);
      },
      error: (err) => {
        console.log('err', err);
      },
    });
  }, []);

  return (
    <div>
      <Allnft/>

    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
