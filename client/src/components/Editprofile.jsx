import React, { useState,useEffect } from 'react';
import FooTer from './footer.jsx';
import { FaHeart } from 'react-icons/fa';
import axios from 'axios';
import Dropzone from 'react-dropzone';

function Editprofile({user,changeView}) {
   
    const [datap, setDatap] = useState([]);
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setname] = useState('');

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [updated,setUpdated]=useState(false)
    const fetchpost = async () => {
        try {
          const response = await axios.get("http://localhost:3000/api/post/");
          setDatap(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      const deletepost=(id)=>{
        axios.delete(`http://localhost:3000/api/post/${id}`).then(()=> setUpdated(!updated)).catch((error)=>console.log(error))
      }
      const updateS=(id,obj)=>{
        axios.put(`http://localhost:3000/api/user/${id}`,obj).then((res)=>{
          console.log(res.data);
          fetch()
      })
      }
    

    const handleUpdate =  () => {
          updateS(user.id,{
          email: email !== '' ? email : user.email,
          password: password !== '' ? password : user.password,
          name: name !== '' ? name : user.name,
          });
      
          
          setEmail('');
          setPassword('');
          setname('');
          setIsModalOpen(false);
         

  };
  const handleDelete=(id)=>{
      deletepost(id)
     
  }

  const toggleLike = (index) => {
      const newData = [...datap]; 
      newData[index].liked = !newData[index].liked; 
      
    };
    useEffect(()=>{fetchpost()},[updated])
    
    console.log(datap,'üüü')
return (
  <div>
  <div style={{ display:'flex',justifyContent:'center',alignItems:'center',height: '100vh',flexDirection:'column'}}>
  <div style={{
  width: '60%',
  height: '400px',
  overflow: 'hidden',
  position: 'relative',
  borderRadius: '10px', // Adds rounded corners
  boxShadow: '0 4px 8px rgba(0,0,0,0.2)', // Subtle shadow for depth
  margin: '20px auto', // Centers the container and adds vertical spacing
}}>
  <img 
    src="https://e0.pxfuel.com/wallpapers/295/317/desktop-wallpaper-fashion-industry-fashion-clothes.jpg" 
    alt="Description" 
    style={{
      width: '100%', 
      height: '100%', 
      objectFit: 'cover',
      transition: 'transform 0.5s ease', // Smooth transition for zoom effect
    }}
    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} // Zoom in
    onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} // Zoom out to original scale
  />
  </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '10px' }}>
  <img src={user.image} alt="Profile" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
  <p style={{ margin: '5px 0 0 0' }}>{user.name}</p>
</div>
 <button  onClick={()=> changeView('Userprofile')} style={{border: 'none', backgroundColor: '#007bff',color: 'white',cursor: 'pointer', }}>Profile</button>
</div>
              
</div>
<br /><br /><br /><br />
          <div>
    <button onClick={() => setIsModalOpen(true)} style={{
      padding: '10px 20px',
      borderRadius: '5px',
      border: 'none',
      backgroundColor: '#007bff',
      color: 'white',
      cursor: 'pointer',
    }}>Update ur Profile</button>
    
    {isModalOpen && (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '20px',
          borderRadius: '10px',
          backgroundColor: 'white',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          width: '80%',
          maxWidth: '500px',
        }}>
          <h1 style={{ color: '#1A202C' }}>Update</h1>
          <input
            type="text"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              outline: 'none',
              marginBottom: '10px',
            }}
          />
          <textarea
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              outline: 'none',
              resize: 'vertical',
              minHeight: '100px',
              marginBottom: '10px',
            }}
          />
          <input
            type="text"
            value={name}
            placeholder='name'
            onChange={(e) => setname(e.target.value)}
            style={{
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              outline: 'none',
              marginBottom: '10px',
            }}
          />
          <button
            onClick={() =>{ handleUpdate(),setIsModalOpen(false)}}
            style={{
              padding: '10px 20px',
              borderRadius: '5px',
              border: 'none',
              backgroundColor: '#007bff',
              color: 'white',
              cursor: 'pointer',
            }}
          >
            Send
          </button>
          <button onClick={() => setIsModalOpen(false)} style={{
            padding: '10px 20px',
            borderRadius: '5px',
            border: 'none',
            backgroundColor: 'grey',
            color: 'white',
            cursor: 'pointer',
            marginTop: '10px',
          }}>Close</button>
        </div>
      </div>
    )}

</div>
    </div>
    
    <div style={{
display: 'flex',
justifyContent: 'center', // Center both children horizontally in the viewport
alignItems: 'flex-start', // Align children at their top edges
width: '100%', // Take the full width of the viewport
padding: '20px', // Add some padding around the entire content
}}>

{/* Gallery Container */}
<div style={{
display: 'flex',
flexDirection: 'row',
flexWrap: 'wrap',
justifyContent: 'flex-start',
padding: '10px',
gap: '10px',
border: '2px solid #eaeaea', // Nice light grey border
borderRadius: '10px', // Rounded corners for the border
backgroundColor: '#f9f9f9', // Light background color
maxWidth: '300px', // Limit the width of the gallery
margin: '20px', // Margin around the gallery for spacing
boxShadow: '0 2px 4px rgba(0,0,0,0.1)', // Subtle shadow for depth
}}>

  {/* Replace these with your actual gallery images */}
  <img src="https://s3-alpha-sig.figma.com/img/66a6/4993/4dd26b5218c111c538688e3afd407696?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gYIuNGjLGfCPJtGFR3SFx1mDNCQD~~9Vl2cblT1gbjYKB8XfHPCLXpeWKnpgcBYwbO7hBNCIDB0l2MZ3dUtfonMq19WzfyqJFC8tjSkBoYGq2Ig7ivudFSrKDirLc3pROjImTrqL8uYoH1XZQzJMdZNE5Bf1O7JHHJr6u1U2gyG~3BHrJe6KV622nSD4TivSuc0XmtJ-w1KzBgkHUGq-BRvmApWfx8ONEGmNnSkK0~OV3RdbGv72CO36HSrYJKLWjHngxrzqr~UqHy0enTThcr3RUIL1K5flAjh6LN2Vns8ytbsdf4GBmNjJZvHfKhWjzLS39khWFjwCDo2viKUCIA__" alt="Gallery Image 1" style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '5px' }} />
  <img src="https://s3-alpha-sig.figma.com/img/f18d/9d28/99412ce92ec33ef84e305ac8e3b03772?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TtcmocDi4BubSh77rL8-ZwOyxWkVWA3y5hkoFnUw4wHwzK4lPkKKRFzJvXf1Y8HiChc1YUhKS2UIlXxGBLSJACqBwg-ufAG7yKEHTI4yubGoztvqCdBOGYmFOvENlksnVNiRJtF81rZkJsf-E7YSNFbz7P34o440DuatpN~5v9k1Jz3AdWE1YYDDQsmYnrKoJ-tJ9ZmK3lOjnKL88YKXVhkibaBYZfgkyIScwTe46AFLTi-l4GNVVRKHefwnipES5ug1zl~QsYxQtRQpqcBnQcGE0gy8lVV8Wg7CP-FqZVBNNfJWpBGs4-5vKg1TWz6mKMj5pQeUA~g81PuPkN80Rg__" alt="Gallery Image 2" style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '5px' }}  />
  <img src="https://s3-alpha-sig.figma.com/img/f1af/14ca/38d25fda12ee8d7b7833bb7f3faf9d51?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E4isD-rX~7bQf1CVFsip-LO~BM0~5ut2aZojcA64sGhOBVFnhWNqD22OdlMKjjLzeldF9bOYGV-0CDVrIh4xqurh-A4-lH1i39uUyqF344lP1xe6xeNMay-UyqY~lkbP31UntmioJIW-oERUwmAUxZLuaPMlk~g3lcxppdJOHnmHNg~qZoNTTlF~vUvsFJd1M2ciVkCBRCMlYtaWHtwDFvt6fepZUeqdJCl4wP3a7fN~2zQnTXsZnmKXcExlJjVFk4Wqk05rS4~NZWrRzfrUbI4VoXo3l8J7mJu87WNmctsIuJZgHNwaF4iBkNZlD8uHgI8voYIEkcHtMAagaieg0A__" alt="Gallery Image 2" style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '5px' }}  />
  <img src="https://s3-alpha-sig.figma.com/img/c363/cb74/e7d82ba84bc431bb5231e060d4afbd1b?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G5a3vbrD75egbO2Y6DmD5offM6GJoAalVKTB9wdmO6J5kDWxi-0TDRxAfHAycyeMI4qk-ryW4ucP1wWhSW~0KXLe5BwHg7-ogk43Ik94k7oChGlXYI9f6REyIlltun4m-TlAOdS~XRta-StnkuirS2ffRY8KAM~jReE74Zgk~S3wdwKekZQ1QAUjxKNiNRCrVk9RVRr2tRvVuRBc04aI7lmvNBKl~reH7tKE1mQTK7K86NhrLqM2R9dSKTaNbp2PGGdvwkJSTVg15IbSlxAQsDlQyFpeof37AJfMVUsPFS8HHqfT7acCFWlgyfFF0w72GGFATBeBSr7VpOGsXoFaQA__" alt="Gallery Image 2" style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '5px' }} />
  <img src="https://s3-alpha-sig.figma.com/img/6bc8/d3c5/7493075e3a9df1876e3a2b940b0249ae?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KYtwt0VM0H8hifFOlkaWXK2JqXjNqlTCswY2vlleK-XoclGkQS4JdVIuH26lLr2tDvgk6G9HzTV3hcUvmR5o1TN~I25en~uZUDLJBdIVfc9T~PLAHpM~HoUtu3EtV1CALemtAl4jIt4V6PXBKgQ3k7X0gmi6cn8SLkVXA6TX~cq--PYWSjrd1zjgn1CFk4wNDsTsKDpgscat-PTp9rtkE4VtsaC4aqVRxfEk~spwZIIaTlZouhEhvGsLpr6Ltnp~upWHLT6IjUbZYbnHgEdiktzgasv3TSdAHc7ThyepX0BsUiClZxR66PPnTbR1UcOI90m0mBtA1xALJHf6S3swEg__" alt="Gallery Image 2" style={{ width: '100px', height: '100px', objectFit: 'cover' , borderRadius: '5px'}}  />
  <img src="https://s3-alpha-sig.figma.com/img/b51c/567f/e5bf95dec918540fb8a9d86bfe3de8ae?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pmjowcaXNwHjTJhvPWs8g28NIkAR8nYh9Jm2Q8a1jJ39blFM~eM2425HzIxjoBJ-Drzo499oUHno9nm4BFBGVatQbH4OEytNOyqIp-amhJZwb5IpUBlY4~tqMFseRefB1aM1-3zpPut4aflYB7x3O1nCwbVyyhKO7aBb71RXcuf6X0ExZh-5SHpBjAW5vO46T9DR1MDUQmx-dwWuB9Yesc2suvCLl36QBQ0E3GTTgkxHCGmt5TvFOSwBtrsrUAnf6p194lJ61ReSi~f~dujvbgpagY~2eSVKKboxk-r-A0ljNJ~YURvAA7~mLgNi7AC2NlRChb0Gr0-KjXgwz7BdoA__" alt="Gallery Image 2" style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '5px' }}  />
  <img src="https://s3-alpha-sig.figma.com/img/4ad1/3da1/9f1a3acb99705180fbfbfaf3214cf901?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LxkXtBnGbIr-DRr5PONuc2Ub9OEylmNwvXjsU2Bp0YZWweHUgnK7x1qzeNuuX8CTAYPK449r~yWoCINFtNpWVRyzMCAwGlY4Gpn7rw07h2lUSrGlUwbgfyuxx5kDP05iNsm6fMd8orT0cctf-i8qf5h~p-a8wgcdCPI4~SBBiLvE5WG9NBaWJSNzcZ1hdzxf3ukbmm4jbqO8NSJjR4i1MZPTR0W3pDxRFG8ya4Qlz~E0OQj1dJ3svGDd5MiEbYJCpl~y0Cxm1S4PMDeDeigr9KdXspDMHFQvMf-b7RW3HqPCsPrpTZ63rIfoY0xlufpkBAl4W~ehkrS8vsFcd4t~LQ__" alt="Gallery Image 2" style={{ width: '100px', height: '100px', objectFit: 'cover' , borderRadius: '5px'}}  />
  {/* Add more images as needed */}
</div> 

{/* Existing Content Container */}
<div style={{
  display: 'flex',
  flexDirection: 'column',
  width: '50%', // Adjust as needed based on the size of the gallery and available space
}}>

{datap.map((post, index) => (
  <div key={index} style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'right', // Center content of each post
    width: '60%', // Adjusts the post width for centering
    margin: '20px',
    padding: '15px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    borderRadius: '5px',
    backgroundColor: 'white', // Consider adding a background color for contrast
  }}>
    <div style={{
      alignSelf: 'flex-start', // Aligns user info to the start of the post
      display: 'flex',
      alignItems: 'center', // Aligns items in line
      width: '100%', // Takes full width to separate from content below
    }}>
      <img src={user.image} alt="Profile" style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }} />
      <h3 style={{ margin: 2,color: '#1A202C' }}>{user.name}</h3>
    </div>
    <p style={{ fontWeight: 'bold', fontSize: '18px', textAlign: 'center', width: '100%' ,color: '#1A202C'}}>{post.title}</p>
    <img src={post.image} alt={post.title} style={{ maxWidth: '100%', height: 'auto', margin: '10px 0' }} />
    <div style={{
      display: 'flex',
      justifyContent: 'space-between', // Spaces elements within the div
      alignItems: 'center',
      width: '100%', // Ensure this takes the full width of the post container
    }}>
      <FaHeart
        onClick={() => toggleLike(index)}
        style={{ cursor: 'pointer', color: post.liked ? 'red' : 'grey' }}
      />
      {/* Placeholder or component for comments */}
      <input
placeholder='Comments'
style={{
  width: '100%', // Ensures the input stretches to the full width of its container
  padding: '10px 15px', // Adds some padding inside the input for text visibility
  fontSize: '16px', // Increases font size for better readability
  border: '2px solid #E2E8F0', // Specifies a border color that is subtle
  borderRadius: '20px', // Rounds the corners of the input field
  outline: 'none', // Removes the default focus outline to replace with a custom one
  marginRight: '10px', // Keeps the original marginRight for spacing
  backgroundColor: '#F8FAFC', // A light background color for the input
  color: '#1A202C', // Text color
  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)', // Adds a subtle inner shadow to create depth
  transition: 'border-color 0.3s, box-shadow 0.3s', // Smooth transition for focus states
}}
onFocus={(e) => {
  e.target.style.borderColor = '#A0AEC0'; // Changes border color on focus for visual feedback
  e.target.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.1), 0 0 0 3px rgba(66,153,225,0.5)'; // Adds a glow effect on focus
}}
onBlur={(e) => {
  e.target.style.borderColor = '#E2E8F0'; // Reverts the border color on blur
  e.target.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.1)'; // Reverts the shadow on blur
}}
/>
<br />
<button  onClick={handleDelete(post.id)} style={{border: 'none', backgroundColor: '#007bff',color: 'white',cursor: 'pointer', }}>delete</button>

        
      
    </div>
  </div>
))}
</div>
</div>

    <FooTer />
  </div>
)
}

export default Editprofile;



