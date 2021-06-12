import { BrowserRouter as Router, Route } from 'react-router-dom';

import React from 'react';

import { Redirect } from 'react-router-dom';

import Sidebar from '../4templates/Sidebar';
//------------------react tostify
import 'react-toastify/dist/ReactToastify.css';
import DashboardNav from '../4templates/DashboardNav';
import BreadCrum from '../2molecules/BreadCrum';
import DashboardBody from '../4templates/DashboardBody';
import DashboardService from '../4templates/DashboardService';

export default function WelcomeHome(props) {
  //?sidebar admin animation

  if (props.loggedInStateProps === 'true') {
    return (
      <>
        <Router>
          <div id="welcomeHome">
            <Sidebar />
            <div className="home_content">
              <div className="text">
                {/* navbar start  */}
                <DashboardNav
                  currentUser={props.currentUser}
                  setLoggedInProps={props.setLoggedInProps}
                />
                {/* ____________bread crumb start  */}
                <BreadCrum />

                {/* --dashboard card  */}

                {/* //?______________only render header if isLoggedIn is false */}

                <Route
                  path="/welcomehome"
                  component={() => <DashboardBody />}
                />
                <Route
                  path="/dashboardservice"
                  component={() => (
                    <DashboardService
                      loggedInStateProps={props.loggedInStateProps}
                    />
                  )}
                />

                {/* --dashboard card  */}
              </div>
            </div>
          </div>
        </Router>
      </>
    );
  } else {
    return (
      <>
        {/* on logout "logout handler" makes isLoggedIn value to "false" which
        triggers below */}
        <Redirect to="/login" />;
      </>
    );
  }
}
