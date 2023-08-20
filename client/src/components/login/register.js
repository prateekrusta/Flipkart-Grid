import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/css/login.css';

const Register = () => {
  const [emailId, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [dob, setDob] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const history = useNavigate(); 

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirmChange = (e) => {
    setPasswordConfirm(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePhoneNoChange = (e) => {
    setPhoneNo(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleDobChange = (e) => {
    setDob(e.target.value);
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
      password: password,
      password0: passwordConfirm,
      firstName: firstName,
      surname: lastName,
      phoneNo: phoneNo,
      gender: gender,
      age: age,
      dob: dob,
    };
    console.log(data);
    const url_post = 'http://localhost:8000/v1/user/signup'; 

    axios
      .post(url_post, data, config)
      .then((response) => {
        console.log('Data sent successfully:', response.data);
        history('/dashboard');
      })
      .catch((error) => {
        console.error('Error sending data:', error);
      });
  };

  return (
    <div>
      <form className='form-register' onSubmit={handleFormSubmit}>
        <div className="form-group row">
          <div className='col-sm-4'>
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
          <div className='col-sm-4'>
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
          <div className='col-sm-4'>
            <label htmlFor="passwordConfirm">Confirm Password</label>
            <input
              type="password"
              name="passwordConfirm"
              autoComplete="off"
              required
              value={passwordConfirm}
              onChange={handlePasswordConfirmChange}
            />
          </div>
        </div>


        <div className="form-group row">
          <div className='col-sm-4'>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              autoComplete="off"
              required
              value={firstName}
              onChange={handleFirstNameChange}
            />
          </div>
          <div className='col-sm-4'>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              autoComplete="off"
              required
              value={lastName}
              onChange={handleLastNameChange}
            />
          </div>
          <div className='col-sm-4'>
            <label htmlFor="age">Age</label>
            <input
              type="number"
              name="age"
              autoComplete="off"
              required
              value={age}
              onChange={handleAgeChange}
            />
          </div>
        </div>

        <div className="form-group row">
          <div className='col-sm-4'>
            <label htmlFor="gender">Gender</label>
            <input
              type="text"
              name="gender"
              autoComplete="off"
              required
              value={gender}
              onChange={handleGenderChange}
            />
          </div>
          <div className='col-sm-4'>
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              name="dob"
              autoComplete="off"
              required
              value={dob}
              onChange={handleDobChange}
            />
          </div>
          <div className='col-sm-4'>
            <label htmlFor="phoneNo">Phone Number</label>
            <input
              type="tel"
              name="phoneNo"
              autoComplete="off"
              required
              value={phoneNo}
              onChange={handlePhoneNoChange}
            />
          </div>
        </div>

    

        <div className="btn-sbmt-cont">
          <button type="submit" value="Register" className="btn-sbmt" disabled={isLoading}>
            {isLoading ? (
              <>
                Registering...
              </>
            ) : (
              'Register'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register