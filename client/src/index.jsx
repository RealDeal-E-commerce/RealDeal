import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import List from './components/List.jsx'
import Fashionshows from "./components/Fashionshows.jsx"
import Upcomingshows from "./components/Upcomingshows.jsx"
import Previousshows from "./components/Previousshows.jsx"
const App = () => {
  const [items, setItems] = useState([])
  useEffect(() => {
    $.ajax({
      url: '/api/items',
      success: (data) => {
        console.log(data)
        setItems(data)
      },
      error: (err) => {
        console.log('err', err)
      },
    })
  }, [])

  return (
    <div>
       <Fashionshows/>

      <Upcomingshows/>

      <Previousshows/>
     


    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
