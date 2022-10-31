import React from 'react';
import { Link, NavLink } from "react-router-dom";
import $ from 'jquery'; 

$(function(){
  $('.nav-user-item').on('click', function() {
    $('.nav-user-item').toggleClass('sub-menu-open');
  });

  $(window).on("scroll", function () {
      if ($(window).width() > 319) {
          if ($(window).scrollTop() > 200) {
              $("header").addClass("fixed-top");
          } else {

          $("header").removeClass("fixed-top");
          }
      }
  });


});

function Header() {
    return (
      <header className="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <Link to="/" className="navbar-brand"><img src="/images/logo.png" alt="Logo" /></Link>
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="#navbarNav" aria-expanded="false">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav ml-auto align-items-center">
              <li className="nav-item"><NavLink exact to="/" className="nav-link">Home</NavLink></li>
              <li className="nav-item"><NavLink to="/blog" className="nav-link">Blog</NavLink></li>
              <li className="nav-item">
                <NavLink to="/help" className="nav-link">Help</NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown01">
                    <li><NavLink to="/security-center" className="dropdown-item">Security Center</NavLink></li>
                    <li><NavLink to="/how-to-book" className="dropdown-item">How to book</NavLink></li>
                </ul>
              </li>
              <li className="nav-item"><NavLink to="/support" className="nav-link">Support</NavLink></li>
              <li className="nav-item nav-user-item"><NavLink to="/" className="nav-link nav-user"><i className="fa fa-user" aria-hidden="true"></i></NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown02">
                    <li><NavLink to="/sign-up" className="dropdown-item">Sign Up</NavLink></li>
                    <li><NavLink to="/log-in" className="dropdown-item">Log In</NavLink></li>
                    <li><NavLink to="/host-your-home" className="dropdown-item">Host Your Home</NavLink></li>
                    <li><NavLink to="/host-an-experience" className="dropdown-item">Host An Experiences</NavLink></li>
                    <li><NavLink to="/help" className="dropdown-item">Help</NavLink></li>
                </ul>
              </li>
              <li><NavLink to="/hosting" className='btn-black'><span>List Your Property</span></NavLink></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
    );
  }


export default Header; 