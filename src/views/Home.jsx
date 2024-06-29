import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
import './Home.css';

const Home = () => {
  return (
<div>
  <div id="pcoded" className="pcoded">
    <div className="pcoded-overlay-box" />
    <div className="pcoded-container navbar-wrapper">
    <Header></Header>
  <div className="pcoded-main-container">
    <div className="pcoded-wrapper">
        <div class="sidebar">
          <Sidebar></Sidebar>
        </div>
        <div class="content">
          <Outlet></Outlet>
       </div>
       </div>
    </div>
  <div className="fixed-button">
        <a href="https://codedthemes.com/item/guru-able-admin-template/" target="_blank" className="btn btn-md btn-primary">
          <i className="fa fa-shopping-cart" aria-hidden="true" /> Upgrade To Pro
        </a>
      </div>
    </div>
  </div>
</div>

  )
}

export default Home
