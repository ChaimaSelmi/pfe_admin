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
    <nav className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl" id="navbarBlur" navbar-scroll="true">
      <div className="container-fluid py-1 px-3">
        <div className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4" id="navbar">
          <div className="ms-md-auto pe-md-3 d-flex align-items-center">
            <div className="input-group">
              <span className="input-group-text text-body"><i className="fas fa-search" aria-hidden="true" /></span>
              <input type="text" className="form-control" placeholder="Type here..." />
            </div>
          </div>
          <ul className="navbar-nav  justify-content-end">
            <li className="nav-item d-flex align-items-center">
              <a href="javascript:;" className="nav-link text-body font-weight-bold px-0" onClick={logoutHandler}>
                <i className="fa fa-user me-sm-1" />
                <span className="d-sm-inline d-none">Se déconnecter</span>
              </a>
            </li>
            <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
              <a href="javascript:;" className="nav-link text-body p-0" id="iconNavbarSidenav">
                <div className="sidenav-toggler-inner">
                  <i className="sidenav-toggler-line" />
                  <i className="sidenav-toggler-line" />
                  <i className="sidenav-toggler-line" />
                </div>
              </a>
            </li>
          
           
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
