import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import '../App.css';
import './Signup'; 

const Login = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');



    const handleLogin = () => {
        // Validate the username and password (for simplicity, just check if they are not empty)
        if(username && password) {
            navigate(`/dashboard/${username}`);
        }else{
            alert('Please enter both username and password. ');
        }
    };

    const navigateToSignup = () => {
        //validation 1
        //validation 2
        navigate("/signup");
    };


    return(
        <div className="mainContainer">
            <div className="container">
                <div className="card">
                    <h2 className="h2"> Login</h2>
                    <label> Username: </label>

                    <input
                        className="input"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="username"
                    />
                    
                    <br />
                    <label>Password:</label>
                    <input 
                        className="input"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="password"
                    />   
                    <br />

                    <button onClick={handleLogin} className="button">Login</button>
                    <button onClick={navigateToSignup} className="button">Signup</button>
                </div>
            </div>
        </div>
    );
};

export default Login;