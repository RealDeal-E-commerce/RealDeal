import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './components/homepage.jsx'; // Note the correct import path

const App = () => {
  const user = {
    name: "John Doe", // Sample user data
    image: "profile.jpg" // Sample user data
  };

  return (
    <div>
      <Homepage user={user} /> {/* Pass user prop to the Homepage component */}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));