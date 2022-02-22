import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import "./login/signup.css";

import Auth from '../../utils/auth';
import Signup from './Signup';

const Login = (props) => {
  
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);
  console.log(JSON.stringify({error}, null, 2));

 // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };
  
 // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await login({
        variables: { ...formState },
      });
      console.log(data)
      Auth.login(data.login.token);
      
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

 

 

  return (
      
    <main id="form-box" className="flex-row justify-center mb-4">
      <div id= "outer-flex" className="outer">
        <div className="card" id="login-card">
          <h4 className="header">Login</h4>
          <div className="card-body">
            <form onSubmit={handleFormSubmit}>
              <input
                className="form-input"
                placeholder="Your email"
                name="email"
                type="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="******"
                name="password"
                type="password"
                id="password"
                value={formState.password}
                onChange={handleChange}
              />
              <button id="login-btn" className="btn d-block w-50" type="submit">
                Submit
              </button>
            </form>

            {error && <div>Login failed</div>}
            
          </div>
          
        </div>
        <div><Signup /></div>
        
      </div>
    </main>
  );
};

export default Login;