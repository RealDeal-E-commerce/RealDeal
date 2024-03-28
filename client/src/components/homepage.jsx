import React from 'react';
import Navbar from './navbar.jsx';
import FooTer from './footer.jsx';

const Homepage = ({ user }) => {
    return (
        <div style={{ paddingBottom: '100px' }}> {/* Add padding to accommodate the footer */}
            <Navbar user={user} />
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
            </div><br /><br /><br />
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h1 >About Us</h1>
            <p style={{ color: 'grey-dark', opacity: 0.5 }}>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
            </div><br /><br /><br />
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                    <div style={{ flex: 1, textAlign: 'left', paddingRight: '20px' }}>
                    <div className="image-container">
                        <img src="https://s3-alpha-sig.figma.com/img/4f3b/4bc5/0336a716d5a69a265c6890a20951754e?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nYph4zNjBJ8Dm2pbN-JoCBeSfuKN8A5yvDmOze4~-nfXUruD4x14kORE9kj1UuWKyDH-rfq8IxZUfYQUvcZwLa-JVKnROQyuVZPAA3Ecv0gTQGzzF7fgqbaaReYmV3-wxzwkIsEl3M4sfF2-fSeJaLPAcDkk1XWZ5xeRpa4ICbGTJ4jaEpXCJXm-Li4y5WjgBZc39G-VaXFVGN40hYuld7gpWekloM~yI-Gzk6hdfJSrK-0YXo7kObwYG103BGowEbmFCLBWjnKCagw~r4N859HkNxG0PM6IC4kLGutcTYUuohpo80Q7wEPj~BVniYIY0wxH-h7wsWr~ukgtpVleAw__" alt="Description" />
                        </div>
                    
                    </div>
                    <div style={{ flex: 1 }}>
                    <h1 >Fashion That Speaks</h1>
                    <p style={{ color: 'grey-dark', opacity: 0.5 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. </p>
                    <button className="custom-button">Show more</button>
                    </div>
                </div>
            </div><br /><br /><br />
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h1 >All Collection</h1>
            <p style={{ color: 'grey-dark', opacity: 0.5 }}>Worlds First Layer 2 Fashion Marketplace</p>
            </div><br /><br /><br />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}>
                {/* Container for buttons */}
                <div style={{ display: 'flex' }}>
                    {/* Five buttons */}
                    <button className="custom-button"> All Collections</button>
                    <button className="custom-button"> Verified Brands</button>
                    <button className="custom-button"> Verified Artists</button>
                    <button className="custom-button"> New Drops</button>
                    <button className="custom-button"> live Shows</button>
                </div>
            </div>
            <FooTer />
        </div>
    );
}

export default Homepage;
