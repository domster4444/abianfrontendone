import React from 'react';
import { useState } from 'react';

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
//React boostrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//DWIt IMAGES
import axios from 'axios';
import dwitLogo from '../../../img/attendanceServiceImgFolder/dwitLogo.png';
export default function Login() {
  const [isLoggedInDWIT, setIsLoggedInDWIT] = useState('false');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailHandler = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  let submitHandler = (e) => {
    e.preventDefault();
    axios
      .post('https://abianserverone.herokuapp.com/attendanceLoginRoute', {
        data: {
          email: email,
          password: password,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <main id="attendanceLogin">
        <section class="logincontainer">
          <form action="" onSubmit={submitHandler}>
            <header>
              <img src={dwitLogo} alt="logo of organization" />
            </header>
            <div class="logincredintaial">
              <h1 className="poppins_regular_400">Login</h1>
              <Form.Control
                type="email"
                onChange={emailHandler}
                placeholder="Enter email"
              />
              <Form.Control
                type="password"
                onChange={passwordHandler}
                placeholder="Enter password"
              />
            </div>
            <div class="loginbutton">
              <Button type="submit" className="poppins_medium_500">
                LogIn
              </Button>
            </div>

            <footer className="cursor">
              <Link to="/attendanceRegister">
                Dont have any account ? <u>Register Instead</u>
              </Link>
            </footer>
          </form>
        </section>
      </main>
    </>
  );
}
