import axios from 'axios';
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';


const Header = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate()
  const logoutHandler = () => {
    const token = user.tokens.accessToken
    console.log(token)
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    axios.get('http://localhost:3001/auth/logout', { headers })
    .then(response => {
        navigate('/')
        localStorage.clear()
      })
    .catch(error => {
        console.log(error)
      });
  }
  return (
    <nav className="navbar header-navbar pcoded-header">
    <div className="navbar-wrapper">
      <div className="navbar-logo">
        <a className="mobile-menu" id="mobile-collapse" href="#!">
          <i className="ti-menu" />
        </a>
        <a className="mobile-search morphsearch-search" href="#">
          <i className="ti-search" />
        </a>
        <a href="index.html">
          <img className="img-fluid" src="assets/images/logo.png" alt="Theme-Logo" />
        </a>
        <a className="mobile-options">
          <i className="ti-more" />
        </a>
      </div>
      <div className="navbar-container container-fluid">
        <ul className="nav-left">
          <li>
            <div className="sidebar_toggle"><a href="javascript:void(0)"><i className="ti-menu" /></a></div>
          </li>
          <li>
            <a href="#!" onclick="javascript:toggleFullScreen()">
              <i className="ti-fullscreen" />
            </a>
          </li>
        </ul>
        <ul className="nav-right">
          <li className="header-notification">
            <a href="#!">
              <i className="ti-bell" />
              <span className="badge bg-c-pink" />
            </a>
            <ul className="show-notification">
              <li>
                <h6>Notifications</h6>
                <label className="label label-danger">New</label>
              </li>
              <li>
                <div className="media">
                  <img className="d-flex align-self-center img-radius" src="assets/images/avatar-4.jpg" alt="Generic placeholder image" />
                  <div className="media-body">
                    <h5 className="notification-user">John Doe</h5>
                    <p className="notification-msg">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                    <span className="notification-time">30 minutes ago</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="media">
                  <img className="d-flex align-self-center img-radius" src="assets/images/avatar-3.jpg" alt="Generic placeholder image" />
                  <div className="media-body">
                    <h5 className="notification-user">Joseph William</h5>
                    <p className="notification-msg">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                    <span className="notification-time">30 minutes ago</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="media">
                  <img className="d-flex align-self-center img-radius" src="assets/images/avatar-4.jpg" alt="Generic placeholder image" />
                  <div className="media-body">
                    <h5 className="notification-user">Sara Soudein</h5>
                    <p className="notification-msg">Lorem ipsum dolor sit amet, consectetuer elit.</p>
                    <span className="notification-time">30 minutes ago</span>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li className="user-profile header-notification">
            <a href="#!">
              <img src="assets/images/avatar-4.jpg" className="img-radius" alt="User-Profile-Image" />
              <span>John Doe</span>
              <i className="ti-angle-down" />
            </a>
            <ul className="show-notification profile-notification">
              <li>
                <a href="#!">
                  <i className="ti-settings" /> Settings
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ti-user" /> Profile
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ti-email" /> My Messages
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="ti-lock" /> Lock Screen
                </a>
              </li>
              <li>
                <a onClick={logoutHandler}>
                  <i className="ti-layout-sidebar-left"/> Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Header
