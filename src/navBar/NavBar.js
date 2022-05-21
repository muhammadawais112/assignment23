import React from 'react';
import { Link } from "react-router-dom";
import "../navBar/NavBar.css";


function NavBar(props) {
  return (
    <div>

      <nav className="navbar navbar-expand-lg navbar-light bg-danger ">
        <div className="container-fluid">
          <a className="navbar-brand text-white" >Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item" >
                <Link className="nav-link active " class="styleNav" aria-current="page" to="/">LandingPage</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active " class="styleNav" aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active " class="styleNav" aria-current="page" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active " class="styleNav" aria-current="page" to="/service">Service</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active " class="styleNav" aria-current="page" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active " class="styleNav" aria-current="page" to="/signup">SignUp</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active " class="styleNav" aria-current="page" to="/logout">LogOut</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>

    </div>
  );
}

export default NavBar;