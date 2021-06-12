import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
//DWIt IMAGES
// logo
import dwitLogo from '../../../img/attendanceServiceImgFolder/dwitLogo.png';
export default function Register() {
  const [isRegisteredDWIT, setRegisterDWIT] = useState('false');
  const [registrationFirstName, setRegistrationFirstName] = useState('');
  const [registrationLastName, setRegistrationLastName] = useState('');
  const [registrationEmail, setRegistrationEmail] = useState('');
  const [registrarionPassword, setRegistrationPassword] = useState('');

  const registrationHandler = (e) => {
    const targetName = e.target.name;
    if (targetName === 'firstName') {
      setRegistrationFirstName(e.target.value);
    } else if (targetName === 'lastName') {
      setRegistrationLastName(e.target.value);
    } else if (targetName === 'email') {
      setRegistrationEmail(e.target.value);
    } else if (targetName === 'password') {
      setRegistrationPassword(e.target.value);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    axios.defaults.headers.common['X-Auth-Token'] =
      'MyTokenSentFromClientToServerAsHeader';

    axios.interceptors.request.use(
      (config) => {
        console.log(
          `${config.method} request send to ${
            config.url
          } at ${new Date().getTime()}`
        );
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    axios.post('https://abianserverone.herokuapp.com/attendanceRegisterRoute', {
      data: {
        firstName: registrationFirstName,
        lastName: registrationLastName,
        email: registrationEmail,
        password: registrarionPassword,
      },
    });
  };
  useEffect(() => {
    console.log(
      registrationFirstName,
      registrationLastName,
      registrationEmail,
      registrarionPassword
    );
  });
  return (
    <>
      <main id="attendanceRegister">
        <form action="" onSubmit={submitHandler}>
          <section class="registercontainer">
            <header>
              <img src={dwitLogo} alt="logo of organization" />
            </header>
            <div class="logincredintaial">
              <h1 className="poppins_regular_400">Registration</h1>
              <Form.Control
                name="firstName"
                onChange={registrationHandler}
                className="formInputControl"
                type="first name"
                placeholder="Enter first name"
              />
              <Form.Control
                name="lastName"
                onChange={registrationHandler}
                className="formInputControl"
                type="last name"
                placeholder="Enter last name"
              />
              <Form.Control
                name="email"
                onChange={registrationHandler}
                className="formInputControl"
                type="email"
                placeholder="Enter email"
              />
              <Form.Control
                name="password"
                onChange={registrationHandler}
                className="formInputControl"
                type="password"
                placeholder="Enter password"
              />
            </div>
            <div class="loginbutton">
              <Button type="submit" className="poppins_medium_500">
                LogIn
              </Button>
            </div>
            <footer className="cursor">
              <Link to="/attendanceLogin">
                Already have any account ? <u>Login Instead</u>
              </Link>
            </footer>
          </section>
        </form>
      </main>
    </>
  );
}
