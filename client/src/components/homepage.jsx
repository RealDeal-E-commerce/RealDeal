import React, { useState } from 'react';
import Navbar from './navbar.jsx';
import FooTer from './footer.jsx';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Market from './Market.jsx';

const Homepage = ({ user }) => {
    const [liked, setLiked] = useState([false, false, false,false, false, false,false, false, false]);
    const [view, setView] = useState('home');
    // Function to toggle liked state for a specific item
    const toggleLike = (index) => {
        const newLiked = [...liked];
        newLiked[index] = !newLiked[index];
        setLiked(newLiked);
    };
 
    const changeView = (view) => {
       
        setView(view)
    
      };

    return (
        <div style={{ paddingBottom: '100px' }}>
            {/* <Navbar user={user} changeView={changeView}/> */}
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <button className="custom-button">Main collection</button>
                <button className="custom-button">Creators Market</button>
                <div className="line"></div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                    <div style={{ flex: 1, textAlign: 'left', paddingRight: '20px' }}>
                        <h2>Clothes are the Spirit of Fashion</h2>
                        <p style={{ color: 'grey-dark', opacity: 0.5 }}>For some, the act of getting dressed is a mindless routine,<br/> each article of clothing grabbed from a hanger merely something to cover the body.</p>
                    </div>
                    <div style={{ flex: 1 }}>
                        <div className="image-container">
                            <img src="https://s3-alpha-sig.figma.com/img/9633/b2e4/eb061615759e00059604362faf403017?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vpadz6jsR0~zG1fdk36kTeJPxMSdWeS9d9zXexFAiuX7vGa2A1-tV~KpmtkBNDR-En65kmyXuq7u~CSAXaCYdMjcJOnEHpSNYGgA-vKY~qmRS1V-7JK8qsWgKXonwAFNtO4GcENJrdHcIuGEHLnozINBRl1UF7q6RZPgci0TfgfhzTkSf1d~YiBlmTpYtiOHeENZGMI14dh32-7GcGR0aY8ua--uL~SePnT9yYVkGBE6wT1N2hEcp6Dqe9DCMx6ZjKweTwGDlTr6iKQsf1uWHv75s4ym9piWWpomJTMhhkUOwRBln-aKUARfRmilQgVQqfKCTIt6x3~k4sWxOjVXuQ__" alt="Description" />
                            <img src="https://s3-alpha-sig.figma.com/img/367b/240f/eed87fddf10cbfdc594fe6fee166e246?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nvn0wBIZfE4bgaAwHZubKSoQR7dbHr6q1YoAX4R1sSYAUlYBf-bII94QsBH8RYZZ65gYjVBreD7OMzI0hIiPZvhznTWh07yNuwkcpbojbgm48rMcY~5uVfYV50eNYPJNaBQLWuAFF87q-WrYCVQbYHNxYHjyFeiFc1XITDm86K8Rkz6NrNqtsaNKd~nuGbcy3zgAwbCXDCZiOJA-YewvyKGmVChauuqs1NL6mAnk0Xg0AJpu5XECwZFTiPrU6xbVxUPN8A-bT2kRZ9J2NIjz6kBu8sE0x4wmGLAnr4EhoUPQZKsglFk1Jwuk4s0gml2Fzi8hDJShX1ONcZVM3M7Gbw__" alt="Description" />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                    <div style={{ flex: 1, textAlign: 'left', paddingRight: '20px' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ marginRight: '40px' }}>
                                <h3>100+</h3>
                                <p style={{ color: 'grey-dark', opacity: 0.5 }}>Brands</p>
                            </div>
                            <div style={{ marginRight: '40px' }}>
                                <h3>20k+</h3>
                                <p style={{ color: 'grey-dark', opacity: 0.5 }}>Fashion Designer</p>
                            </div>
                            <div style={{ marginRight: '40px' }}>
                                <h3>60+</h3>
                                <p style={{ color: 'grey-dark', opacity: 0.5 }}>Fashion Shows</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ flex: 1 }}>
                        <div className="image-container">
                            <img src="https://s3-alpha-sig.figma.com/img/c270/899a/f4006572f436b70282076d99f08a17fc?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d55KeUIKftWyDZrrSlcrlytItsPJYPMU5UO7korc6m7dvbGkQ~mNiVr18BAo5tABtYkvhbRcTIQBLdTbtF7l4etTIFUV~IVxHPArTolmsKP8OX2dLgHvA~Sbsh5~Ojdxuko2rwxlDfArm-8viPCRDPes4ZSJDy~wcT7LTPfUBaVlJTd9aE1gM0Dw4S0NapnSzRLl5yN1-kONVmacvOX3V1fvYCEH-IGkx9-mrXevreV6nDBnRSwZhUD6o8RAWVyZ93vPfw15nT12dtkvCDAmqEdcE0vHNXOVtYRPNEwu4CT2w2T91nCb~X3bOEvy3Ojzd60GQGShmeVcCjBuq8JkOw__" alt="Description" />
                            <img src="https://s3-alpha-sig.figma.com/img/514e/d6c7/279fbf5e9453f3515714cf3aac978486?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HOKluV3rVjhHwlJYJW8vZb8R8oE6XjwdJ9XtXmNuLB~8-qAyAbfdkYJmH1sE~b-eWuPs~A62MabwAGCwMw585MFLbhecFmO~Sth1eOOyEOudTXU72U8PvCh8QtqKYIe4zlPWJBGPaUWQ5yIOS0takBBhFeywhw1f6B4Cs4i-QXovcNcJxuWMaMUgqqQmtMZ1vWgHqxr11x1OAxSS~lejmkK-1iW3l44OiPP41DlqFv6WDIkIAdLmHFFnhU0Gmz8ADOtTcWPRF-6j4o94myPTKb9lJIaMGw2m8EZdRwBLXts9VIYD6iM4g16jowCdY4Boi~M0bLmsdd-MwYWTw~n7iA__" alt="Description" />
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <h1>About Us</h1>
                <p style={{ color: 'grey-dark', opacity: 0.5 }}>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                    <div style={{ flex: 1, textAlign: 'left', paddingRight: '20px' }}>
                        <div className="image-container">
                            <img src="https://s3-alpha-sig.figma.com/img/4f3b/4bc5/0336a716d5a69a265c6890a20951754e?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nYph4zNjBJ8Dm2pbN-JoCBeSfuKN8A5yvDmOze4~-nfXUruD4x14kORE9kj1UuWKyDH-rfq8IxZUfYQUvcZwLa-JVKnROQyuVZPAA3Ecv0gTQGzzF7fgqbaaReYmV3-wxzwkIsEl3M4sfF2-fSeJaLPAcDkk1XWZ5xeRpa4ICbGTJ4jaEpXCJXm-Li4y5WjgBZc39G-VaXFVGN40hYuld7gpWekloM~yI-Gzk6hdfJSrK-0YXo7kObwYG103BGowEbmFCLBWjnKCagw~r4N859HkNxG0PM6IC4kLGutcTYUuohpo80Q7wEPj~BVniYIY0wxH-h7wsWr~ukgtpVleAw__" alt="Description" />
                        </div>
                    </div>
                    <div style={{ flex: 1 }}>
                        <h1>Fashion That Speaks</h1>
                        <p style={{ color: 'grey-dark', opacity: 0.5 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. </p>
                        <button className="custom-button">Show more</button>
                    </div>
                </div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <h1>All Collection</h1>
                <p style={{ color: 'grey-dark', opacity: 0.5 }}>Worlds First Layer 2 Fashion Marketplace</p>
            </div>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                    <button className="custom-button">All Collections</button>
                    <button className="custom-button">Verified Brands</button>
                    <button className="custom-button">Verified Artists</button>
                    <button className="custom-button">New Drops</button>
                    <button className="custom-button">Live Shows</button>
                </div>
           <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '20%', textAlign: 'center' }}>
                    <div className="image-container">
                    <img src="https://s3-alpha-sig.figma.com/img/cb06/cade/7150b60bf72e93308e4e881223c15c6d?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O6LYk8gvzFVYPj8NLjlnilXcxeCI~nEMKV28uBr6a2IeDqZwWuBlCQmKxo9xw~4aGFhGK7LcaXi85gAKX7l3wdpKJ9WZzJoGW0ks4MibzRTknSNVUpf-hTjEfHm4YW~s44Lnw3uCrs93xyeIAezjiE1PpLyvhiGppnTSGMvoIUieVG-QLQXwbO3n6-ekFA-wv52WEWuTuIRRQko4IkSRRMHgv0D72vdlUDbagJJHCKC29HdQESgEGIw~B9leAST-2rySJEfahBPeF9SAzC~uBkm3zQBmC-dISahCTngzdAY9JAsKm3AFeHNNRPOAVwAx8NMQcrgqE~-eaRxzAm1lIw__" alt="Product" style={{ width: '100%', height: 'auto' }} /> <br />
                    </div>
                    <button className="custom-button">Buy Now</button>
                    {/* Heart icon */}
                    <i
                        className={`far fa-heart${liked[0] ? ' liked' : ''}`}
                        onClick={() => toggleLike(0)}
                        style={{ color: liked[0] ? 'red' : 'black', cursor: 'pointer' }}
                    ></i>
                </div>
                {/* Repeat the above structure for other items */}
                <div style={{ width: '20%', textAlign: 'center' }}>
                <div className="image-container">
                        <img src="https://s3-alpha-sig.figma.com/img/d645/7073/3227e7c4414aee4ecffc42f6e9fe523c?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GJza2xDKdJy78WNJwG~ogb~OpQqsrwOQEOJaWMhM5BhmfoLFskNSVgxzIzC8EEOW0Nb-9pI1qDkM5kqJwj~FAqO-TMSUqrDCi6yBDWTsGK9B77du7XnMieN0vH5y7pUMvq47EyrVZ16H82xW4hG1XYGhc~mysklgN0tihkEv3sdc~pFE3FzFfaITkRQCLqRz3Pgw5cI0Xhz0WnTSSax5O2WUc~fKiI4XojSErRZjHBkmDgiHLIH0fZ9OpJdRH0jGCZLB~v7cOm0t6vZLS-pr6uBwa5LP0YZ1rPVHSPKQThny5flr8juDQHv7ZQI-i49FULaSThg9drfC9T6gAmQQLw__" alt="Product" style={{ width: '100%', height: 'auto' }} /> <br />
                    </div>
                    <button className="custom-button">Buy Now</button>
                    {/* Heart icon */}
                    <i
                        className={`far fa-heart${liked[1] ? ' liked' : ''}`}
                        onClick={() => toggleLike(1)}
                        style={{ color: liked[1] ? 'red' : 'black', cursor: 'pointer' }}
                    ></i>
                </div>
                <div style={{ width: '20%', textAlign: 'center' }}>
                <div className="image-container">
                <img src="https://s3-alpha-sig.figma.com/img/e882/3d5c/ab5fabb8be193ba03dcd61a112386fb3?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P1saWB1cvJYbhrQftam7gP5epojjLGYrlct5qI0vGJb8Gx1~8z6gpqSKydftkGNF69fhKbBkzTd0hQQOiE1O4RwALxbsz-VPid4or18qCbpJvzYiQKOM7juNkXBfi7nAF~mvAU-wE5MRXJe-Vqzj5exeon59YXkqLgOmBmMqY43Ee0ptu90-jck22XKvLCkdfWAb2VoPsdZ1oYz5tbW9ttgiGieLuYI4ZWmLcStCWQ6bbH5E3qpCSb3qzlB0-06Rj2-98Cl3YJVOtcoSJFIQfG-DJlaHgBQpD1vNKgQGatdGtP358nZOwBtaUaxYzNKslYS1b9siO2MVNwK7f5cJ0w__" alt="Product" style={{ width: '100%', height: 'auto' }} /> <br />
                    </div>
                    <button className="custom-button">Buy Now</button>
                    {/* Heart icon */}
                    <i
                        className={`far fa-heart${liked[2] ? ' liked' : ''}`}
                        onClick={() => toggleLike(2)}
                        style={{ color: liked[2] ? 'red' : 'black', cursor: 'pointer' }}
                    ></i>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '20%', textAlign: 'center' }}>
                    <div className="image-container">
                        <img src="https://s3-alpha-sig.figma.com/img/6ad7/0ad3/c0d9b88524001d4a23da533d7258a549?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CKgZn4utCNU0uO4ECkcEtTHLRXzMs1rWj7RPG8RPsWSNDZ2DiOuJRDwCXVvQjwJxqRz6CHrltxus~VxEYutD786qo6JQZJ0X1ZEKxVu~fSuWTMfNFs9uZm448Y19-2NMhEYJkh4dfGWuUNxQ28hxSmCPXxQ-TwHEdcBfe3Ls~KPuB2~~bgFG6oas3J~bSOfainHgoHQ6RDoI0rjKRx--~~nr8N5jTqOc~nJyn52GVJro185tmgSK6iRhvnQb~hC3l4o5g5pFRGNrH5xYSiuMULlISTq1QyZpZknenHStZSqF96A-WB7DcynqsQfoH2zcRtmPwPO1kd6wtC5JoOi9tQ__" alt="Product" style={{ width: '100%', height: 'auto' }} /> <br />
                    </div>
                    <button className="custom-button">Buy Now</button>
                    {/* Heart icon */}
                    <i
                        className={`far fa-heart${liked[3] ? ' liked' : ''}`}
                        onClick={() => toggleLike(3)}
                        style={{ color: liked[3] ? 'red' : 'black', cursor: 'pointer' }}
                    ></i>
                </div>
                {/* Repeat the above structure for other items */}
                <div style={{ width: '20%', textAlign: 'center' }}>
                <div className="image-container">
                        <img src="https://s3-alpha-sig.figma.com/img/e3c0/586e/4029db031dc23d5855d510c199d3bed7?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QNeYvSv7MS5batENr4QAYUXv6-2bmJA9~U8vuQdmkL1ex5Rxw16x1sYsWrfBOMIIwJvZFhJIL~AY4T8no1F5lcrBqmZChP1MutZPc3gymPnyhdSLpTo6UbG5ZVYpuxedEFVp48IVqiFbHTtaN-hd-Fk4L-ljGqJ~Tat2DlKgGlH3omSvc1TPI5QnMtzQp-8SGOViK03TYNtgpGF-1XCCcvXE07Us8nc4ooXmnazaWJ-9qBBpqHbw2~yR-whX6EVBNVSHG82LqcQG4wvrk1VNFHobJGtHMcctyxCWAEgISjfMII~MzhaVfzlbCtfcYH8A2sSzrxhYMYu14tbjiACxbA__" alt="Product" style={{ width: '100%', height: 'auto' }} /> <br />
                    </div>
                    <button className="custom-button">Buy Now</button>
                    {/* Heart icon */}
                    <i
                        className={`far fa-heart${liked[4] ? ' liked' : ''}`}
                        onClick={() => toggleLike(4)}
                        style={{ color: liked[4] ? 'red' : 'black', cursor: 'pointer' }}
                    ></i>
                </div>
                <div style={{ width: '20%', textAlign: 'center' }}>
                <div className="image-container">
                        <img src="https://s3-alpha-sig.figma.com/img/7876/7660/7ccee400a5739554d99448f5f84d964a?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EMBGSgjtMKPblctUAILDrfRFDGiQWkB2m7XGncvrnThh4bXC90ApQS~OMp0zzRh7fiZhFcTV5jzshGQeVb1~ion1ounO7Cs2lvkPUuyRtFDHZ5h1Conf~ayAsAETM7tGWYDkAaDizH5M08YreSaMILVEqi5ICNwgeGwgYFJy2d5uWj7T1oUfGuAaZ7Hjuqqp9kzL8jrq32xiJ4rwCnxdj3Am8n4XdJlEZufXyjInJY-mLKQnO7QjRXIdx~qIUJ~cYxUcyP1ydNBIuK7HwVRBQ952HkK6DFnuLgiFK9t3Ouy4HtWTrpTRBknloFf5JQvshGfC0~0IzA70p75EXWxuAA__" alt="Product" style={{ width: '100%', height: 'auto' }} /> <br />
                    </div>
                    <button className="custom-button">Buy Now</button>
                    {/* Heart icon */}
                    <i
                        className={`far fa-heart${liked[5] ? ' liked' : ''}`}
                        onClick={() => toggleLike(5)}
                        style={{ color: liked[5] ? 'red' : 'black', cursor: 'pointer' }}
                    ></i>
                </div>
            </div><br /><br /><br /><br />
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <h1>ANew & Trending</h1>
                <p style={{ color: 'grey-dark', opacity: 0.5 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '20%', textAlign: 'center' }}>
                    <div className="image-container">
                    <img src="https://s3-alpha-sig.figma.com/img/cd6a/14bf/bec5b5bde9f5c0589616b27c2cb7333f?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ONq~nz3SLlQYrklE6htUzSQ0TNadWgb~Z1pGyxfL3hUfOlSH5eS2RWczzpace7VXjhZUVR4kQAdZVt53QHtgJ6dInfTtY16jVIk~RTT400ZPP~eFIpMvkIt39emshrDJ5lEBhhqMrWl23JEOY1sMVIBr9Nan5giTO9qH5Rpw84WQLQ86BRC254IdJjLltAN6EP3jyLUZWxZlMuOUzvxj52umKN2soK~uJCIke9hJdQWjdieqymb0iEGrsS2IdsOI1r68V~fvChRh5a81CjFtYlybIPPAsHcppASIjn66cvxVOjk2jIyw-BnSqpGIOrrIYfsUpp3cRYusOYif91A17Q__" alt="Product" style={{ width: '100%', height: 'auto' }} /> <br />
                    </div>
                    <button className="custom-button">Buy Now</button>
                    {/* Heart icon */}
                    <i
                        className={`far fa-heart${liked[6] ? ' liked' : ''}`}
                        onClick={() => toggleLike(6)}
                        style={{ color: liked[6] ? 'red' : 'black', cursor: 'pointer' }}
                    ></i>
                </div>
                {/* Repeat the above structure for other items */}
                <div style={{ width: '20%', textAlign: 'center' }}>
                <div className="image-container">
                        <img src="https://s3-alpha-sig.figma.com/img/7892/fb7d/0f5d23da076b86859e126225a7687fd1?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=O50JSgAdcYJ6ZUxRbgCrcy0lI1RPapgix~H8adqRpa58HCvItv7Tv-QXBCQGVK6PNnuWD4iJ6T9Z2n5CmjLLY~6IpS-mW3ZoF30a32WE3kq8kPRNCqaxopq4miyjM2PIE~nLEULRyDeO~Rkjjju3J2BqGrlTHsw2fwvuIAHmSco8rEbzZLReQCiZ1UjAceZvQUMOD77dP6-L8w4pVLGfMBw8jAzU11ADeb7uRSOf3EHUA1OBNfwXySeuL7uEY4J5GdETeBiGWflk8lDXfbds9JEh8ad1Pfrs1~6mmDhUTR5t3TshJgfbNISw4Rtlbbq2buBWVRYd3-bdnhhiapQ92g__" alt="Product" style={{ width: '100%', height: 'auto' }} /> <br />
                    </div>
                    <button className="custom-button">Buy Now</button>
                    {/* Heart icon */}
                    <i
                        className={`far fa-heart${liked[7] ? ' liked' : ''}`}
                        onClick={() => toggleLike(7)}
                        style={{ color: liked[7] ? 'red' : 'black', cursor: 'pointer' }}
                    ></i>
                </div>
                <div style={{ width: '20%', textAlign: 'center' }}>
                <div className="image-container">
                <img src="https://s3-alpha-sig.figma.com/img/8ce9/06a2/5461c570d96dc453adcd0e1d89144291?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QpIwTYUYODNvDdqF3oL~ksF1TqeJlJCpkwL97ywBnZA28yzKoJtJQYTcH63phV0wBcNxEqR81L0To20j-nt8PMRmf59ambeg035XGFIr3UaeN-7jiHaMNXYy8IMQVuI86i8sG-O4pOgcUoJOMXiGpN~4daTsrV-rMv1Gwv88w7IsWqXz05qf1IUPyaGrWfDQbPPBMTbGl4X7ScgH1KRroFBVEdZZ5R6gHxlSj7BeWsYWxWnGt~Gq~V5a7j8PJsltx7KPwkOlUJoNqFucNies8tdts6ynXGpL88PpY9aJ-a-BEyQLJXfqtTrKHzEpLRQXo0IJ~CpkBUkCHoVjLb5geQ__" alt="Product" style={{ width: '100%', height: 'auto' }} /> <br />
                    </div>
                    <button className="custom-button">Buy Now</button>
                    {/* Heart icon */}
                    <i
                        className={`far fa-heart${liked[8] ? ' liked' : ''}`}
                        onClick={() => toggleLike(8)}
                        style={{ color: liked[8] ? 'red' : 'black', cursor: 'pointer' }}
                    ></i>
                </div>
            </div><br /><br /><br /><br />
            

            </div>
            <FooTer />
        </div>
    );
}

export default Homepage;



