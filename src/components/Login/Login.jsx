import React, { useState } from 'react';
import './Login.scss';
import PropTypes from 'prop-types';
import {ROUTE} from '../../utils/constant';


async function loginUser(credentials) {

  return fetch(`${ROUTE.MAIN_URL}/user/authenticate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

export  function Login({ setToken }) {

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    if(token.success === true){
      if(token.data === 1){
        setToken(token.data);
        localStorage.setItem('name', JSON.stringify('ADMIN'));
      }else{
        setToken(token.data.roleId);
        localStorage.setItem('name', JSON.stringify(token.data.fullName));
        localStorage.setItem('agencyId', JSON.stringify(token.data.agencyId));
      }
    }else{
      alert('sai Tài khoản hoặc mật khẩu!')
    }
  }

  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}