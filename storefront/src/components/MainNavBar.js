import React from 'react';
import './MainNavBar.css';

class MainNavBar extends React.Component{
    render() {
        return(
          <nav className="main-nav-bar">
              <div className="main-nav-left">
                <h1>Vender</h1>
                {/* eslint-disable-next-line */}
                <a href="#">Home</a>
                {/* eslint-disable-next-line */}
                <a href="#">Top Rated</a>
                {/* eslint-disable-next-line */}
                <a href="#">Sale!</a>
              </div>
              <div className="main-nav-spacer"></div>
              <div className="main-nav-right">
                {/* eslint-disable-next-line */}
                <a href="#">Search</a>
                {/* eslint-disable-next-line */}
                <a href="#">Cart</a>
                {/* eslint-disable-next-line */}
                <a href="#">About</a>
              </div>   
          </nav>  
        );
    }
}

export default MainNavBar;