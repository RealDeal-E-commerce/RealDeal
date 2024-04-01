import React, { useState } from 'react';
import FooTer from './footer.jsx';
import { FaHeart } from 'react-icons/fa';
import Dropzone from 'react-dropzone';

function Userprofile({user,data,deletepost,changeView,updateS}) {
   
    const [datap, setData] = useState(data);
    const toggleLike = (index) => {
        const newData = [...datap]; // Copy the data array
        newData[index].liked = !newData[index].liked; // Toggle the liked state
        setData(newData); // Update the state
      };
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [name, setname] = useState('');
      
      
      const handleUpdate = () => {
        updateS(user.id,{
            email: email !== '' ? email : user.email,
            password: password !== '' ? password : user.password,
            name: name !== '' ? name : user.name,
            });
        
    }
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
                    <button  onClick={()=> changeView('Userprofile')} style={{border: 'none', backgroundColor: '#007bff',color: 'white',cursor: 'pointer', }}>Profile</button>
                </div>
            </div>
      </div><br /><br /><br />
      
      <div style={{
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
         height: '100vh', // Full viewport height
       
       }}>
      <div style={{
        width: '100%', // or specific width like '400px'
        maxWidth: '600px', // Maximum width of the form container
        padding: '20px',
        boxSizing: 'border-box', // Include padding in the element's total width and height
        borderRadius: '10px', // Optional: for rounded corners
        backgroundColor: 'white', // Optional: background color for the form container
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Optional: adds shadow for depth
    }}>
        <div style={{
            fontSize: '20px',
            color: 'black', // Changed for visibility against potential light backgrounds
            textAlign: 'center', // Center the title
        }}>Update</div>
                <form >
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            placeholder='name'
                            type="name"
                            id="name"
                            value={name}
                            onChange={(e) => setname(e.target.value)}
                            required
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                        placeholder='email'
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                        placeholder='password'
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="form-control"
                        />
                    </div>
                    
                    <button type="button" className="btn btn-secondary" style={{ marginTop: '10px', justifyContent: 'center', backgroundColor: 'dark purple', color: 'white', marginLeft: 'auto', marginRight: 'auto', display: 'block', border: 'none' }} onClick={handleUpdate} >Update</button>
                </form>
            </div>
            </div>

      <div>
      {datap.map((post, index) => (
        <div key={index} style={{ margin: '20px', padding: '15px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', borderRadius: '5px'  }}>
          <p style={{ fontWeight: 'bold', fontSize: '18px' }}>{post.title}</p>
          <img src={post.image} alt={post.title} style={{ maxWidth: '50%', height: 'auto', margin: '10px 0' , alignItems: 'center'}} /><br/>
          <FaHeart
            onClick={() => toggleLike(index)}
            style={{ cursor: 'pointer', color: post.liked ? 'red' : 'grey' }}
          />
          <br/>
           <button  onClick={()=> deletepost(post.id)} style={{border: 'none', backgroundColor: '#007bff',color: 'white',cursor: 'pointer', }}>delete</button>
        </div>
      ))}
      </div>
      <FooTer />
    </div>
  )
}

export default Userprofile;
