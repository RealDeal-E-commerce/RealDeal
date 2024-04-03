import React, { useState, useEffect } from 'react'; 
import { RiLiveLine } from 'react-icons/ri';
import { SlPeople } from 'react-icons/sl';
import axios from 'axios';
import style from "../css/Fashionshows.css";

export default function Fashionshows() {
  const [fashionshows, setFashionshows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/shows/");
        setFashionshows(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };


    fetchData();
  }, []);

  return (
    <>
      <div className="button-container">
        <button className="button1">Established Brands</button>
        <button className="button2">Emerging Brands</button>
      </div>

      <div className="container">
        <h2 className="title">Fashion Shows</h2>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="row">

          {fashionshows.map((fashionshow) => (
            <div key={fashionshow.id} className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <p className="card-text">{fashionshow.time}</p>
                  <div className="image-container">
                    <RiLiveLine className="live-icon" style={{ color: 'red' }} />
                    <SlPeople className="people-icon" style={{ color: 'purple' }} />
                    <img src={fashionshow.imgUrl} className="card-img-top" alt="Fashion Show" />
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
                    {fashionshow.showing}
                    <i className="bi bi-patch-check-fill" style={{ color: '#164dac' }}></i>
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}




