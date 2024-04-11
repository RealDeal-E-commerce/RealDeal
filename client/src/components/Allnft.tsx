import React, { useState, useEffect } from "react";
import axios from "axios";
import from "../css/Allnft.css"

interface Nft {
  imgUrl:string;
  status:string;
  UncommenRare:string;
  price: string;
}

interface Props {
  changeView:(view:string) => void;
  nftt:boolean| undefined;
  objj: string |undefined;
  setNftt:React.Dispatch<React.SetStateAction<boolean>>;
}

const Allnft:React.FC<Props> = ({ changeView, nftt, objj, setNftt }) => {
  const [allnft,setAllnft] = useState<Nft[]>([]);
  const [status,setStatus] = useState('all');
  const [genre,setGenre] =useState('all');
  const [updatt,setUpdatt] = useState(false);

  const fetchData = async () => {
    setNftt(false);
    try {
      let params: { [key:string]:string}= {};
      if (status !=='all') {
        params.status = status;
      }
      if (genre !== 'all') {
        params.genre = genre;
      }

      const response = await axios.get<Nft[]>("http://localhost:3000/api/allnft/", {
        params: params,
      });
      setAllnft(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchNft = async (objj: string | undefined) => {
    try {
      const response = await axios.get<Nft>(`http://localhost:3000/api/allnft/${objj}`);
      setUpdatt(!updatt);
      setAllnft([response.data]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (nftt === false) {
      fetchData();
    } else if (nftt ===true) {
      fetchNft(objj|| '');
    }
  }, [updatt,status,genre]);

  return (
    <div>
      <div className="row">
        <div className="col-lg-3 filter-container">
          <a onClick={() => { setNftt(true); setUpdatt(!updatt) }}>search</a>
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
            <br />
            <a onClick={() => { setNftt(false); setUpdatt(!updatt) }}>All Nfts</a>
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
                            <button onClick={() => { changeView('Payment') }} className="btn btn-primary btn-sm buy-now-button">Buy Now</button>
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
};

export default Allnft;
