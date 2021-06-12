import React from 'react';
//----------------images
import logo from '../../img/companyLogo.png';

// -------------components
import BlueGhostBtn from './BlueGhostBtn';
import HeaderMenu from '../1atoms/HeaderMenu';
export default function Header(props) {
  if (props.isLoggedInProps === 'true') {
    return <></>;
  } else {
    return (
      <>
        <header id="navBar">
          <nav>
            <a href="/">
              <div id="logoBlock">
                <img src={logo} alt="representation of logo" />
              </div>
            </a>
            <div id="menuBlock">
              <ul>
                <HeaderMenu
                  method={'withoutReactRouter'}
                  routePath={'/'}
                  menuName={'Home'}
                />
                <HeaderMenu
                  method={'withReactRouter'}
                  routePath={'/service'}
                  menuName={'Services'}
                />
                <HeaderMenu
                  method={'withReactRouter'}
                  routePath={'/pricing'}
                  menuName={'Pricing'}
                />

                {/* <Link to="/process">
                  <li className="cursor poppins_regular_400">
                  
                  
                  
                  
                  
                  Process
                  
                  
                  
                  
                  </li>
                </Link> */}
                <HeaderMenu
                  method={'withReactRouter'}
                  routePath={'/aboutus'}
                  menuName={'About Us'}
                />

                <HeaderMenu
                  method={'withReactRouter'}
                  routePath={'/ourteam'}
                  menuName={'Our Team'}
                />
                <HeaderMenu
                  method={'withReactRouter'}
                  routePath={'/login'}
                  menuName={'Login'}
                />

                <HeaderMenu method={'withReactRouter'} routePath={'/signup'}>
                  <BlueGhostBtn name="Sign Up" />
                </HeaderMenu>
              </ul>
            </div>
          </nav>
        </header>
      </>
    );
  }
}
