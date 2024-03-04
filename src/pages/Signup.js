import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../App.css';
import './Login';
import {useForm} from 'react-hook-form';
import { showAlert, showToast } from '../Components/Alerts';


const Signup = () => {
    const navigate = useNavigate();

    const {register , handleSubmit , formState: { errors } } = useForm();

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
            showAlert('error','Signup error', 'Fill in all required fields. ');;
        }
    };

    return (
        <div className="mainContainer">
            <div className="container">
                <form className="card" onSubmit={handleSubmit(handleSignup)}>
                <h2 className="h2">
                Signup
                </h2>
            <label>
                Full Name*:
                <input 
                    className="input"
                    type="text"
                    {...register('fullname', {required: "Please enter your username"})}

                />

                    {errors.fullname &&
                        <div className='input-label'>
                            <label className="invalid">{errors.username.message}</label>
                            <br/>
                        </div>
                    }

            </label>
            <br />
            <label>
                E-mail*:
                <input 
                    id="email" // Make sure to add the id here
                    className="input"
                    type="email"
                    {...register('email', {required: "Please enter your username"})}

                />

                    {errors.email &&
                        <div className='input-label'>
                            <label className="invalid">{errors.username.message}</label>
                            <br/>
                        </div>
                    }

            </label>
            <label>
                Username*:
                <input
                    className="input"
                    type="text"
                    {...register('username', {required: "Please enter your username"})}

                />

                    {errors.username &&
                        <div className='input-label'>
                            <label className="invalid">{errors.username.message}</label>
                            <br/>
                        </div>
                    }

            </label>
            <br />
            <label>
                Password*:
                <input 
                    className="input"
                    type="password"
                    value={password}
                    {...register('password', {required: "Please enter your username"})}

                />

                    {errors.password &&
                        <div className='input-label'>
                            <label className="invalid">{errors.username.message}</label>
                            <br/>
                        </div>
                    }

            </label>
            <br />
            <label>
                Re-enter Password*:
                <input 
                    className="input"
                    type="password"
                    {...register('repassword', {required: "Please enter your username"})}

                />

                    {errors.repassword &&
                        <div className='input-label'>
                            <label className="invalid">{errors.username.message}</label>
                            <br/>
                        </div>
                    }

            </label>
                    <button  className="button">Signup</button> 
                    <Link to="/login">Already have an account? Login</Link>
                </form>
            </div>
        </div>
    );
};

export default Signup;
