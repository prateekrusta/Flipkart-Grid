import React, {useState} from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/css/login.css';

const Login = () => {
    const [emailId, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOTP] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const history = useNavigate(); 

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };
    
      const handleOTPChange = (e) => {
        setOTP(e.target.value);
      };

    const GetOTP = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);
    
        try {
          const apiUrl = '';
    
          const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ emailId, password }),
          });
    
          setIsLoading(false);
    
          if (!response.ok) {
            const errorData = await response.json();
            setError(errorData.error || 'Login failed. Please check your credentials.');
            return;
          }
    
          const data = await response.json();
    
        } catch (error) {
          setError('An error occurred during login. Please try again later.');
          setIsLoading(false);
        }
      };
    
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

    const handleFormSubmit =(e)=> {
        e.preventDefault();
    
        const data = {
          emailId: emailId,
          password: password,
          otp:otp.toString(),
        };
        console.log(data)
        const url_post = ``;
    
        axios.post(url_post, data, config)
        .then((response) => {
          console.log('Data sent successfully:', response.data);
          history('/')
        } 
        )
        .catch((error) => {
          console.error('Error sending data:', error);
        });
        
      };
  return (
    <div>
           <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                autoComplete="off"
                required
                value={emailId}
                onChange={handleEmailChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password" 
                name="password"
                autoComplete="off"
                required
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="otp">OTP</label>
              <input
                type="password" 
                name="OTP"
                value={otp} minLength={6} maxLength={6} autoComplete="off"
                onChange={handleOTPChange}
              />
            </div>
            <Link to="" onClick={GetOTP} style={{color:'white'}}>GET OTP</Link>
            <div className="btn-sbmt-cont">
              <button type="submit" value="Login" className="btn-sbmt" disabled={isLoading}>
                {isLoading ? (
                  <>
                   Logging in...
                  </>
                ) : (
                  'Login'
                )}
              </button>
            </div>
          </form>
    </div>
  )
}

export default Login
