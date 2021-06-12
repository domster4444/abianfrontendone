import './scss/main.css';
import { css } from 'styled-components';
import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// --tostify start
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// --tostify end

// abian page start------------------------------------------------------------
import Header from '../src/components/1atoms/Header';
import RoutineApp from './components/5pages/RoutineApp';
import HomePage from './components/5pages/HomePage';
import SignUpPage from './components/5pages/SignUpPage';
import LoginPage from './components/5pages/LoginPage';
import ForgotPasswordPage from './components/5pages/ForgotPasswordPage';
import PageNotFound from './components/5pages/PageNotFound';
import Service from './components/5pages/Service';
import Process from './components/5pages/Process';
import AboutUs from './components/5pages/AboutUs';
import Pricing from './components/5pages/Pricing';
import OurTeam from './components/5pages/OurTeam';
import WelcomeHome from './components/5pages/WelcomeHome';
// abian page end----------------------------------------------------------------------
//attendance -pages start
import AttendanceRegister from './components/5pages/AttendanceSystem/Register';
import AttendanceLogin from './components/5pages/AttendanceSystem/Login';
//attendance -pages end

function App() {
  const [isLoggedIn, setisLoggedIn] = useState('false');
  const [currentUser, setUser] = useState('');
  console.log(isLoggedIn);
  return (
    <>
      {/*//? public routes start ================================================================================================== */}
      <Router>
        {/* //?______________only render header if isLoggedIn is false */}
        <Header isLoggedInProps={isLoggedIn}></Header>

        <Route
          exact
          path="/"
          component={() => <HomePage isLoggedInProps={isLoggedIn} />}
        />
        {/* //?sending state changing handler to respective register & login pages  */}
        <Route
          path="/signup"
          component={() => <SignUpPage isLoggedInProps={isLoggedIn} />}
        />
        {/* //?sending state changing handler to respective register & login pages  */}
        <Route
          path="/login"
          component={() => (
            <LoginPage
              isLoggedInProps={isLoggedIn}
              setLoggedInProps={setisLoggedIn}
              setUser={setUser}
            />
          )}
        />
        <Route path="/forgotpassword" component={ForgotPasswordPage} />
        <Route path="/404" component={PageNotFound} />
        <Route
          path="/service"
          component={() => <Service isLoggedInProps={isLoggedIn} />}
        />
        <Route
          path="/pricing"
          component={() => <Pricing isLoggedInProps={isLoggedIn} />}
        />
        <Route
          path="/process"
          component={() => <Process isLoggedInProps={isLoggedIn} />}
        />
        <Route
          path="/aboutus"
          component={() => <AboutUs isLoggedInProps={isLoggedIn} />}
        />
        <Route
          path="/ourteam"
          component={() => <OurTeam isLoggedInProps={isLoggedIn} />}
        />
        <Route path="/routineapp" component={() => <RoutineApp />} />
        <Route path="/attendanceLogin" component={() => <AttendanceLogin />} />
        <Route
          path="/attendanceRegister"
          component={() => <AttendanceRegister />}
        />

        {/*//? public routes end ================================================================================================== */}
        {/*Private Route -------------------------------------------------------------------------------------------------------------*/}

        <Route
          path="/welcomehome"
          component={() => (
            <WelcomeHome
              currentUser={currentUser}
              setLoggedInProps={setisLoggedIn}
              loggedInStateProps={isLoggedIn}
            />
          )}
        />
      </Router>
      <ToastContainer toastClassName={css({ fontSize: '20rem' })} />
    </>
  );
}

export default App;
