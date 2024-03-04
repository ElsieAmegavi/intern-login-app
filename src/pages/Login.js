import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import '../App.css';
import './Signup'; 
import {useForm} from 'react-hook-form';
import { showAlert , showToast} from '../Components/Alerts';


const Login = () => {
    const navigate = useNavigate();

    // const [username, setUsername] = useState('');
    // const [password, setPassword] = useState('');

const {register , handleSubmit , formState: { errors } } = useForm();

    const handleLogin = (formInput) => {
        // Validate the username and password (for simplicity, just check if they are not empty)
        if(formInput.username && formInput.password) {
            // showToast("success", "Login successful")
            navigate(`/dashboard/${formInput.username}`);
        }else{
            showAlert('error','Login error', 'Please enter both username and password. ');
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
                <form className="card" onSubmit={handleSubmit(handleLogin)}>
                    <h2 className="h2"> Login</h2>
                    <label> Username: </label>

                    <input
                        className="input"
                        type="text"
                        {...register('username', {required: "Please enter your username"})}
                        placeholder="username"
                    />
                    
                    {errors.username &&
                        <div className='input-label'>
                            <label className="invalid">{errors.username.message}</label>
                            <br/>
                        </div>
                    }

                    <br />
                    <label>Password:</label>
                    <input 
                        className="input"
                        type="password"
                        placeholder="password"
                        {...register('password', {required: "Please enter your password"})}

                    />   

                        {errors.password &&
                        <div className='input-label'>
                            <label className="invalid">{errors.username.message}</label>
                            <br/>
                        </div>
                    }

                    <br />

                    <button className="button">Login</button>
                </form>

                <button onClick={navigateToSignup} className="button">Signup</button>


            </div>
        </div>
    );
};

export default Login;