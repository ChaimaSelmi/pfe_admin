import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css';
const Sidebar = () => {
  return (
    <nav className="pcoded-navbar">
    <div className="sidebar_toggle"><a href="#"><i className="icon-close icons" /></a></div>
    <div className="pcoded-inner-navbar main-menu">
      <div className>
        <div className="main-menu-header">
          <img className="img-40 img-radius" src="assets/images/avatar-4.jpg" alt="User-Profile-Image" />
          <div className="user-details">
            <span>John Doe</span>
            <span id="more-details">UX Designer<i className="ti-angle-down" /></span>
          </div>
        </div>
        <div className="main-menu-content">
          <ul>
            <li className="more-details">
              <a href="#"><i className="ti-user" />View Profile</a>
              <a href="#!"><i className="ti-settings" />Settings</a>
              <a href="auth-normal-sign-in.html"><i className="ti-layout-sidebar-left" />Logout</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="pcoded-search">
        <span className="searchbar-toggle"></span>
        <div className="pcoded-search-box ">
          <input type="text" placeholder="Search" />
          <span className="search-icon"><i className="ti-search" aria-hidden="true" /></span>
        </div>
      </div>
      <ul className="pcoded-item pcoded-left-item">
        <li className="active">
          <a href="index.html">
            <span className="pcoded-micon"><i className="ti-home" /><b>D</b></span>
            <span className="pcoded-mtext" data-i18n="nav.dash.main">Dashboard</span>
            <span className="pcoded-mcaret" />
          </a>
        </li>
      </ul>
      <ul className="pcoded-item pcoded-left-item">
        <Link to="/Home/add">
        <li>
            <span className="pcoded-mtext" data-i18n="nav.form-components.main">Add Category</span>
            <span className="pcoded-mcaret" />
        </li>
        </Link>
        <Link to="/Home/list">
        <li>
            <span className="pcoded-mtext" data-i18n="nav.form-components.main">List Categories</span>
            <span className="pcoded-mcaret" />
        </li>
        </Link>
      </ul>
      <ul className="pcoded-item pcoded-left-item">
      <Link to="/Home/listA">
        <li>
            <span className="pcoded-mtext" data-i18n="nav.form-components.main">List Annonces</span>
            <span className="pcoded-mcaret" />
        </li>
      </Link>
      <Link to="/Home/listC">
        <li>
            <span className="pcoded-mtext" data-i18n="nav.form-components.main">List Commentaires</span>
            <span className="pcoded-mcaret" />
        </li>
      </Link>
      <Link to="/Home/listF">
        <li>
            <span className="pcoded-mtext" data-i18n="nav.form-components.main">List Favoris</span>
            <span className="pcoded-mcaret" />
        </li>
      </Link>
      <Link to="/Home/listV">
        <li>
            <span className="pcoded-mtext" data-i18n="nav.form-components.main">List Vendeur</span>
            <span className="pcoded-mcaret" />
        </li>
      </Link>
      <Link to="/Home/listCl">
        <li>
            <span className="pcoded-mtext" data-i18n="nav.form-components.main">List Clients</span>
            <span className="pcoded-mcaret" />
        </li>
      </Link>
      </ul>  
    </div>
  </nav>
  )
}

export default Sidebar
