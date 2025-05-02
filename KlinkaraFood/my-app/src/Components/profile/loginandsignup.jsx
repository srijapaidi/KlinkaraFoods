import React, { useState } from 'react';
import './loginandsignup.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const API_BASE_URL = 'http://localhost:8084/api/users';

const LoginAndSignup = () => {
  const navigate = useNavigate(); 
  const [isSignup, setIsSignup] = useState(false); // Toggle between login/signup

  // Login state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Signup 
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupError, setSignupError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: loginEmail,
      password: loginPassword
    };

    axios.post(`${API_BASE_URL}/login`, userData)
      .then(response => {
        console.log(response.data);
        setLoginError('');
        alert("Login Successful!");
        navigate('/');
        // Redirect or take user to dashboard
      })
      .catch(error => {
        const message = error?.response?.data || 'Login failed';
        console.error('Login error:', message);

        if (message === 'Email does not exist!') {
          setLoginError('Email not found. Please sign up.');
          setIsSignup(true); // Switch to signup form
        } else {
          setLoginError(message);
        }
      });
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    const userData = {
      firstName,
      lastName,
      phone,
      email: signupEmail,
      password: signupPassword
    };

    axios.post(`${API_BASE_URL}/signup`, userData)
      .then(response => {
        console.log(response.data);
        setSignupError('');
        setSuccessMessage('Signup successful! Please log in.');
        setIsSignup(false); // Switch back to login form
      })
      .catch(error => {
        const message = error?.response?.data || 'Signup failed';
        console.error('Signup error:', message);
        setSignupError(message);
      });
  };

  return (
    <div className="login-signup-container">
      {!isSignup ? (
        // Login Form
        <div className="form-container">
          <h2>Login</h2>
          <form onSubmit={handleLoginSubmit}>
            <div className="input-group">
              <label>Email ID</label>
              <input
                type="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
              />
            </div>
            {loginError && <p className="error">{loginError}</p>}
            {successMessage && <p className="success">{successMessage}</p>}
            <button type="submit" className="submit-btn">Login</button>
          </form>
          <p>Don't have an account? <button onClick={() => setIsSignup(true)}>Sign up</button></p>
        </div>
      ) : (
        // Signup Form
        <div className="form-container">
          <h2>Sign Up</h2>
          <form onSubmit={handleSignupSubmit}>
            <div className="input-group">
              <label>First Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Last Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Phone Number</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Email ID</label>
              <input
                type="email"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                required
              />
            </div>
            {signupError && <p className="error">{signupError}</p>}
            <button type="submit" className="submit-btn">Sign Up</button>
          </form>
          <p>Already have an account? <button onClick={() => setIsSignup(false)}>Login</button></p>
        </div>
      )}
    </div>
  );
};

export default LoginAndSignup;
