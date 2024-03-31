import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "../css/Allnft.css";

export default function Allnft() {
  const [allnft, setAllnft] = useState([]);
  const [status, setStatus] = useState('all');
  const [genre, setGenre] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      try {
        let params = {};
        if (status !== 'all') {
          params.status = status;
        }
        if (genre !== 'all') {
          params.genre = genre;
        }
  
        const response = await axios.get("http://localhost:3000/api/allnft/", {
          params: params,
        });
        setAllnft(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
    fetchData();
  }, [status, genre]);

  const handleBuyNow = (amount) => {
    axios.post("/api/allnft/pay", { amount })
      .then((res) => {
        const { result } = res.data;
        window.location.href = result.link; 
      })
      .catch((err) => console.error(err));
  };
  

  return (
    <div>
      <div className="row">
        <div className="col-lg-3 filter-container">
          <div className="card-body">
            <h5 className="card-title filter-title">Filter By:</h5>
            <select
              className="filter-select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="all">status</option>
              <option value="available">Available</option>
              <option value="not_available">Not Available</option>
            </select>
            <select
              className="filter-select"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            >
              <option value="all">Genres</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
            </select>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="row">
            {allnft.map((nft, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4">
                <div className="card card-cascade narrower card-nft">
                  <div className="view view-cascade overlay">
                    <div className="mask rgba-white-slight"></div>
                    <img src={nft.imgUrl} alt="sample" className="img-fluid" />
                    <div className="mask rgba-white-slight">
                      <div className="half-card">
                        <div className="card-up">
                          <p className="card-info">
                            <strong>{nft.status}</strong> 
                            <span className="card-rarity">Secret Rare #{nft.UncommenRare}</span>
                          </p>
                        </div>
                        <div className="card-content">
                          <div className="card-price-button">
                            <p className="card-price">
                              <strong>Price: {nft.price} ETH</strong>
                              <i className="fa fa-diamond"></i>
                            </p>
                            <button 
                              type="button" 
                              className="btn btn-primary btn-sm buy-now-button" 
                              onClick={() => handleBuyNow(nft.price)} 
                            >
                              Buy Now
                            </button>
                            <i className="bi bi-bag-heart-fill"></i>
                          </div>
                        </div>
                        <a
                          href="#!"
                          data-toggle="modal"
                          data-target={`#modalLG${index}`}
                          className="align-middle d-flex justify-content-center btn-floating btn-lg ml-1"
                        ></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
