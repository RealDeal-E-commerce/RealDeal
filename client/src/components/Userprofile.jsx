import React, { useState } from 'react';
import FooTer from './footer.jsx';
import { FaHeart } from 'react-icons/fa';

function Userprofile({user,data,addpost,changeView}) {
   
    const [datap, setData] = useState(data);
    const toggleLike = (index) => {
        const newData = [...datap]; // Copy the data array
        newData[index].liked = !newData[index].liked; // Toggle the liked state
        setData(newData); // Update the state
      };
      const [title,setTitle]=useState('')
      const [content,setContent]=useState('')
      const [image,setImage]=useState('')
    
  return (
    <div>
    <div style={{ display:'flex',justifyContent:'center',alignItems:'center',height: '100vh',flexDirection:'column'}}>
      <div  style={{ width: '60%',height: '400px',overflow: 'hidden'}}>
        <img src="https://s3-alpha-sig.figma.com/img/6262/ff08/c2cdd4f8b04caadb548542f98fd4c2f2?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DOAOhAg0Ls~jm6UiqYYpjq-R92qnBZTxoF~2GvJJFPLfDK9YQCNJMId19aT2V6diniTTRJY4aGYoxX5cL7d7D5rWSRE5akp8goFZeSDaCMKAsCKRKfghlMXE1ayO9b6Wgd-Q9ofUfFyQdyMKF5BFKmdtv~fLWQDtUcebaLLVGnJNHCNiNZpWzPXhpC2JNAXUH2xQK0ZGOf07mxeGiaUN5ioTw5RZ1KJMDV1c~0PYlQEU3milLZqB1-dCjUosG112o0iFxsQ~vSSFk~hz-oKyY8aPXqxkgm1kNRxbBE49RBEAvr6IoeLvqaT8qPYp4JHqnXgzltuFhBqhCsyua9UMQw__" alt="Description" style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover' 
        }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={user.image} alt="Profile" style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '5px' }} />
                    <button  onClick={() => changeView('Editprofile')} style={{border: 'none', backgroundColor: '#007bff',color: 'white',cursor: 'pointer', }}>Edit Profile</button>
                </div>
            </div>
      </div>
      

  
      <div style={{
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '20px',
  padding: '20px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  borderRadius: '10px',
  width: '80%', // Adjust based on preference
  maxWidth: '500px', // Ensures the form doesn't become too wide on larger screens
  backgroundColor: 'white', // Consider your page background color
}}>
    <h1>Add new post</h1>
  <ul style={{ listStyleType: 'none', padding: 0, width: '100%' }}>
    <li style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '10px', // Creates space between form elements
    }}>
      <input
        type="text"
        placeholder='Title'
        onChange={(e) => setTitle(e.target.value)}
        style={{
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          outline: 'none',
          ':focus': {
            borderColor: '#007bff', // Highlight on focus
          }
        }}
      />
      <textarea
        placeholder='Content'
        onChange={(e) => setContent(e.target.value)}
        style={{
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          outline: 'none',
          resize: 'vertical', // Allows vertical resizing
          minHeight: '100px', // Minimum height
          ':focus': {
            borderColor: '#007bff', // Highlight on focus
          }
        }}
      />
      <input
        type="text"
        placeholder='Image URL'
        onChange={(e) => setImage(e.target.value)}
        style={{
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          outline: 'none',
          ':focus': {
            borderColor: '#007bff', // Highlight on focus
          }
        }}
      />
      
      <button
        onClick={() => { addpost({ title, content, image }) }}
        style={{
          padding: '10px 20px',
          borderRadius: '5px',
          border: 'none',
          backgroundColor: '#007bff',
          color: 'white',
          cursor: 'pointer',
          ':hover': {
            backgroundColor: '#0056b3', // Darker shade on hover
          }
        }}
      >
        Send
      </button>
    </li> 
  </ul>
</div>

      <div>
      {datap.map((post, index) => (
        <div key={index} style={{ margin: '20px', padding: '15px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', borderRadius: '5px'  }}>
        <img src={user.image} alt="Profile" style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '5px' }} />
          <p style={{ fontWeight: 'bold', fontSize: '18px' }}>{post.title}</p>
          <img src={post.image} alt={post.title} style={{ maxWidth: '50%', height: 'auto', margin: '10px 0' , alignItems: 'center'}} /><br/>
          <FaHeart
            onClick={() => toggleLike(index)}
            style={{ cursor: 'pointer', color: post.liked ? 'red' : 'grey' }}
          />
        </div>
      ))}
      </div>
      <FooTer />
    </div>
  )
}

export default Userprofile;
