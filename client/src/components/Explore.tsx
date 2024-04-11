import React, { useState, useEffect } from 'react';
import axios from 'axios';
import  '../css/Explore.css';

interface ExploreItem {
  name:string;
  imgP:string; 
  imgB:string; 
  description:string;
}

const Explore: React.FC = () => {
  const [explore, setExplore] = useState<ExploreItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ExploreItem[]>(
          "http://localhost:3000/api/explore/"
        );
        setExplore(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="title-container">
        <h2 className="titlee">Explore Collections</h2>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="buttons-container">
        <button className="button">Trending</button>
        <button className="button">All Fashion NFTs</button>
        <button className="button">Art</button>
        <button className="button">Fashion</button>
        <button className="button">Creators</button>
        <button className="button">Brands</button>
      </div>
      <br />
      <br />
      <div className="container">
        {explore.map((item, index) => (
          <div className="item" key={index}>
            <div className="profile-details">
              <div className="names">
                {item.name}
                <i className="bi bi-patch-check-fill" style={{ color: '#164dac', marginRight: '5px' }}></i>
              </div>
              <img src={item.imgP} alt="" className="profile-picture" />
              <div className="description">{item.description}</div>
            </div>
            <img src={item.imgB} alt="" className="cover-picture" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;
