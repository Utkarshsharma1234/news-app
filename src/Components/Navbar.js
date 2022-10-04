import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
 Link
} from "react-router-dom";

  export class Navbar extends Component {  // IF WE WANT TO CHANGE CLASS BASED COMPONENTS INTO FUNCTION BASED COMPONENTS THEN WE REPLACE THIS LINE BY const Navbar = ()=>{
    // the whole code is written here.
// }

    render() {        // we also remove this render () method and just return the value.
      return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Daily News</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">   <Link className="nav-link" aria-current="page" to="/general">General</Link></li>
                <li className="nav-item">   <Link className="nav-link" to="/business">Business</Link></li>
                <li className="nav-item">   <Link className="nav-link" to="/entertainment">Enterntainment</Link></li>
                <li className="nav-item">   <Link className="nav-link" to="/health">Health</Link></li>
                <li className="nav-item">   <Link className="nav-link" to="/science">Science</Link></li>
                <li className="nav-item">   <Link className="nav-link" to="/sports">Sports</Link></li>
                <li className="nav-item">   <Link className="nav-link" to="/technology">Technology</Link></li>
                </ul>
              </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
