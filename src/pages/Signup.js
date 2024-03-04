import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../App.css';
import './Login';

const Signup = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const [fullname, setFullName] = useState('');
    const [email, setEmail] = useState('');

    const handleSignup = () => {
        // Validate the username and password 
        if (username && email && fullname && password && repassword) {
            if (password === repassword) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
                if (emailRegex.test(email)) {
                    // Valid email address
                    // You can proceed with your form submission or other actions
                    navigate(`/dashboard/${username}`);
                } else {
                    alert('Invalid email address');
                }
            } else {
                alert('Passwords do not match');
            }
        } else {
            alert('Fill in all required fields.');
        }
    };

    return (
        <div className="mainContainer">
            <div className="container">
                <div className="card">
                <h2 className="h2">
                Signup
                </h2>
            <label>
                Full Name*:
                <input 
                    className="input"
                    type="text"
                    value={fullname}
                    onChange={(e) => setFullName(e.target.value)}
                />
            </label>
            <br />
            <label>
                E-mail*:
                <input 
                    id="email" // Make sure to add the id here
                    className="input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <label>
                Username*:
                <input
                    className="input"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </label>
            <br />
            <label>
                Password*:
                <input 
                    className="input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <br />
            <label>
                Re-enter Password*:
                <input 
                    className="input"
                    type="password"
                    value={repassword}
                    onChange={(e) => setRepassword(e.target.value)}
                />
            </label>
                    <button onClick={handleSignup} className="button">Signup</button> 
                    <Link to="/login">Already have an account? Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;
