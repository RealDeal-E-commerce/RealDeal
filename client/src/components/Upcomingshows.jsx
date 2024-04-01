import React, { useState, useEffect } from 'react';
import axios from 'axios';
import style from "../css/Upcomingshows.css";

export default function Upcomingshows() {
  const [previousshows, setPreviousshows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/shows/");
        setPreviousshows(response.data);
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
          <h1 className="live-now">Previous Shows</h1>

          {previousshows.map((previousshows) => (
            <div key={previousshows.id} className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <p className="card-text">{previousshows.time}</p>
                  <div className="image-container">

                    <img src={previousshows.imgUrl} className="card-img-top" alt="Fashion Show" />
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
                    {previousshows.showing}
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
