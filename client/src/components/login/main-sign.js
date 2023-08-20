import React, { useState } from 'react';
import Login from './login';
import Register from './register';
import '../../assets/css/login.css';

const MainAuthentication = () => {
  const [showLogin, setShowLogin] = useState(true); // State to track which component to show

  return (
    <div className="authentication-wrapper">
      <div className="login-register-wrapper">
        <div className="toggle">
          <h1 className={showLogin ? 'active' : ''} onClick={() => setShowLogin(true)}>LOGIN</h1>
          <h1 className={!showLogin ? 'active' : ''} onClick={() => setShowLogin(false)}>REGISTER</h1>
        </div>
        <div>
        {showLogin ? <Login /> : <Register />} 
        </div>
      </div>
    </div>
  );
};

export default MainAuthentication;
