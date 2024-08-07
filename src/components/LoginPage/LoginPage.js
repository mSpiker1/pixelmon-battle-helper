import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    // Function to handle login functionality
    const handleLogin = () => {
        // login logic goes here
        if(username && password){
            // On successful login
            navigate('/home');
        } else{
            // FIX this later so it isn't a pop-up prompt
            alert("Please enter your credentials.");
        }
    };

    // Function to handle the user continuing without logging in
    const handleAsGuest = () => {
        navigate('/home');
    };

    return(
        <div>
            <h2>Login</h2>
            <input 
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input 
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleAsGuest}>Continue as Guest</button>
        </div>
    );
}

export default LoginPage;