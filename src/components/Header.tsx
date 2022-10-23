import React from 'react'
import "../templace/css/bootstrap.min.css";
import "../templace/css/font-awesome.min.css";
import "../templace/css/flaticon.css";
import "../templace/css/owl.carousel.min.css";
import "../templace/css/barfiller.css";
import "../templace/css/magnific-popup.css";
import "../templace/css/slicknav.min.css";
import "../templace/css/style.css";
import { Link } from 'react-router-dom';

type Props = {}

const Header = (props: Props) => {
  return (
    <>

    <div>
      {/* Offcanvas Menu Section Begin */}
      <div className="offcanvas-menu-overlay" />
      <div className="offcanvas-menu-wrapper">
        <div className="canvas-close">
          <i className="fa fa-close" />
        </div>
        <div className="canvas-search search-switch">
          <i className="fa fa-search" />
        </div>
        <nav className="canvas-menu mobile-menu">
          <ul>
            <li><Link to="./">Home</Link></li>
            <li><Link to="./about">About Us</Link></li>
            <li><Link to="./classes">Classes</Link></li>
            <li><Link to="./services">Services</Link></li>
            <li><Link to="./ourteam">Our Team</Link></li>
            <li><Link to="./contact">Contact</Link></li>
          </ul>
        </nav>
        <div id="mobile-menu-wrap" />
        <div className="canvas-social">
          <Link to="#"><i className="fa fa-facebook" /></Link>
          <Link to="#"><i className="fa fa-twitter" /></Link>
          <Link to="#"><i className="fa fa-youtube-play" /></Link>
          <Link to="#"><i className="fa fa-instagram" /></Link>
        </div>
      </div>
      <header className="header-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <div className="logo">
                <Link to="./index.html">
                  <img src={""} alt="" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <nav className="nav-menu">
                <ul>
                  <li className="active"><Link to="./">Home</Link></li>
                  <li ><Link to="./about">About Us</Link></li>
                  <li><Link to="./classes">Classes</Link></li>
                  <li><Link to="./services">Services</Link></li>
                  <li><Link to="./ourteam">Our Team</Link></li>
                  <li><Link to="./contact">Contact</Link></li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3">
              <div className="top-option">
                <div className="to-search search-switch">
                  <i className="fa fa-search" />
                </div>
                <div className="to-social">
                  <Link to="#"><i className="fa fa-facebook" /></Link>
                  <Link to="#"><i className="fa fa-twitter" /></Link>
                  <Link to="#"><i className="fa fa-youtube-play" /></Link>
                  <Link to="#"><i className="fa fa-instagram" /></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="canvas-open">
            <i className="fa fa-bars" />
          </div>
        </div>
      </header>
    </div>

    

    </>
  )
}

export default Header