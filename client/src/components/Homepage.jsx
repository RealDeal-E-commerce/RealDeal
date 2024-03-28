import React from 'react';
import FooTer from './FoOter.jsx';
import Navbar from './Navbar.jsx';
import '../../dist/style.css'
const Homepage = ({ user }) => {
    const isFashionDesigner = user.role === 'fashionDesigner';
    const isAdmin=user.role==='admin'
    
    
    const handleCreateProduct = () => {
        // Logic for creating a product
    };

    const handleUpdateProduct = () => {
        // Logic for updating a product
    };

    const handleDeleteProduct = () => {
        // Logic for deleting a product
    };

    return (
        <div>
            <Navbar user={user} />
            <div style={{ padding: '20px' }}>
            {isFashionDesigner ? (
                    <div>
                        <h2>Product Management</h2>
                        <button onClick={handleCreateProduct}>Create Product</button>
                        <button onClick={handleUpdateProduct}>Update Product</button>
                        <button onClick={handleDeleteProduct}>Delete Product</button>
                    </div>
                ) : (
                    <div>
                        <h2>Products</h2>
                        {/* Display products here */}
                    </div>
                )}
                <h1>Welcome, {user.name}</h1>
                <img src={user.profilePicture} alt="Profile" style={{ width: '100px', height: '100px', borderRadius: '50%', marginBottom: '10px' }} />
                {/* Other content of the homepage */}
            </div>
              <FooTer />
        </div>
    );
};




export default Homepage;