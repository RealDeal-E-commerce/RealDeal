import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from "../css/Upcomingshows.css";

export default function Allnft() {
  const [upcomingshows, setUpcomingshows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/shows/");
        setUpcomingshows(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="container">
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="row">
          <h1 className="live-now">Upcoming Shows</h1>

          {upcomingshows.map((upcomingshows) => (
            <div key={upcomingshows.id} className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <p className="card-text">{upcomingshows.time}</p>
                  <div className="image-container">

                    <img src={upcomingshows.imgUrl} className="card-img-top" alt="Fashion Show" />
                  </div>
                  <br />
                  <br />
                  <h3 className='showing'>Showing:</h3>
                  <h5 className="card-title">
                    <span className="badge">
                      <div className="logo-wrapper">
                        <img className='zalandologo' src="https://www.gooddata.com/img/resources/_1200x630/Zalando.png" alt="img" />
                      </div>
                    </span>
                    {upcomingshows.showing}
                    <i className="bi bi-patch-check-fill" style={{ color: '#164dac' }}></i>
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
