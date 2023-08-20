import React, {useState, useContext} from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
import AdminEmailContext from '../context/adminContext';
import AdminNameContext from '../context/AdminNameContext';
import '../../assets/css/login.css';

const Login = () => {
    const { setEmailId } = useContext(AdminEmailContext);
    const { setAdminName } = useContext(AdminNameContext);
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
    
        try {
          const apiUrl = 'http://localhost:8000/v1/user/login';
          const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ emailId, password }),
          });
    
          
    
          if (!response.ok) {
            const errorData = await response.json();
            setError(errorData.error || 'Login failed. Please check your credentials.');
            return;
          }
    
          const data = await response.json();
        } catch (error) {
          setError('An error occurred during login. Please try again later.');
          setIsLoading(false);
          console.log(error);
        }
      };
    
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const handleFormSubmit = (e) => {
        e.preventDefault();
      
        const data = {
          emailId: emailId,
          otp: otp.toString(),
        };
        console.log(data);
        const url_post = `http://localhost:8000/v1/user/verify-otp`;
        setIsLoading(true);
        axios
          .post(url_post, data, config)
          .then((response) => {
            setIsLoading(false);
            console.log('Data sent successfully:', response.data);
            setEmailId(response.data.emailId);
            setAdminName(response.data.firstName);
            localStorage.setItem('emailId', response.data.emailId);
            localStorage.setItem('firstName', response.data.firstName);
            {(response.data.error) ? <></> : history('/dashboard')}
          }).catch((error) => {
            console.error('Error sending data:', error);
          });
      };
  return (
    <div className='login-form'>
           <form onSubmit={handleFormSubmit}>
            <div className="form-group row">
            <div className='col-sm-12'>
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
            </div>
            <div className="form-group row">
            <div className='col-sm-12'>
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
            </div>
            <div className="form-group row">
              <div className='col-sm-12'>
              <label htmlFor="otp">OTP</label>
              <input
                type="password" 
                name="OTP"
                value={otp} minLength={6} maxLength={6} autoComplete="off"
                onChange={handleOTPChange}
              />
              </div>
            </div>
            <div onClick={GetOTP} style={{color:'black'}}><a href=''>GET OTP</a></div>
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
