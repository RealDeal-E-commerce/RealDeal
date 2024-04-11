import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Fashionshows from "./components/Fashionshows.jsx";
import Upcomingshows from "./components/Upcomingshows.jsx";
import Previousshows from "./components/Previousshows.jsx";
import Allnft from './components/Allnft.jsx';
import Explore from "./components/Explore.jsx";
import Payment from './components/Payment.jsx';

const App = () => {
  const [items, setItems] = useState([]);
  const [showPayment, setShowPayment] = useState(false);
 

  const handleBuyNow = () => {
    setShowPayment(true);
  };

  return (
    <div>
      {showPayment ? <Payment /> : <Allnft handleBuyNow={handleBuyNow} />}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
