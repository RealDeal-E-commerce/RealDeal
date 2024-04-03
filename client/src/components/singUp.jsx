import React, { useState } from 'react'
import Dropzone from 'react-dropzone';
import axios from 'axios';

function signUp({ singUp, changeView }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setname] = useState('');
    const [role, setRole] = useState('fashionDesigner');
    const [image, setImage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlenameChange = (e) => {
        setname(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRoleChange = (e) => {
        setRole(e.target.value);
    };

    const handleImageDrop = async (acceptedFiles) => {
        const file = acceptedFiles[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'ygjfen9u'); 

        try {
            setIsLoading(true);
            const response = await axios.post('https://api.cloudinary.com/v1_1/dnirskhlb/image/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            const imageUrl = response.data.secure_url;
            console.log(imageUrl);
            setImage(imageUrl);
            setIsLoading(false);
        } catch (error) {
            console.error('Error uploading image to Cloudinary:', error);
            setIsLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        singUp({ name, password, email, role, image });
    };

    const handleSignUp = () => {
        if (image) { 
            singUp({ name, password, email, role, image });
            changeView('login');
        }
    };

    return (
        <div className="login-form signUp" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '150vh', fontSize: '20px' }}>
            <div>
                <div style={{
                    fontSize: '20px',
                    color:'white'
                }}>Sing Up</div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="name"
                            id="name"
                            value={name}
                            onChange={handlenameChange}
                            required
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="role">Role</label>
                        <select
                            id="role"
                            value={role}
                            onChange={handleRoleChange}
                            required
                            className="form-control"
                        >
                            <option value="fashionDesigner">Fashion Designer</option>
                            <option value="client">Client</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                            className="form-control"
                        />
                    </div>
                    <Dropzone onDrop={handleImageDrop}>
                        {({ getRootProps, getInputProps }) => (
                            <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px', border: '2px dashed #ddd', borderRadius: '5px', backgroundColor: '#f9f9f9', color: '#888', fontSize: '16px', cursor: 'pointer' }}>
                                <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    {isLoading ? (
                                        <p style={{ margin: '0' }}>Uploading...</p>
                                    ) : (
                                        <p style={{ margin: '0' }}>Drop some files here, or click to select files</p>
                                    )}
                                </div>
                            </section>
                        )}
                    </Dropzone>
                    <button type="button" className="btn btn-secondary" style={{ marginTop: '10px', justifyContent: 'center', backgroundColor: 'dark purple', color: 'white', marginLeft: 'auto', marginRight: 'auto', display: 'block', border: 'none' }} onClick={handleSignUp} >Sign Up</button>
                    <button type="button" className="btn btn-secondary" style={{ marginTop: '10px', justifyContent: 'center', backgroundColor: 'dark purple', color: 'white', marginLeft: 'auto', marginRight: 'auto', display: 'block', border: 'none' }} onClick={()=>{changeView('login')}} >Login</button>
                </form>
            </div>
        </div>
    );
};

export default signUp;
