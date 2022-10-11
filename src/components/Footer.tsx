import React from "react";
import "../templace/css/bootstrap.min.css";
import "../templace/css/font-awesome.min.css";
import "../templace/css/flaticon.css";
import "../templace/css/owl.carousel.min.css";
import "../templace/css/barfiller.css";
import "../templace/css/magnific-popup.css";
import "../templace/css/slicknav.min.css";
import "../templace/css/style.css";
import LogoWebSite from "../templace/img/logo.png";
import { Link } from "react-router-dom";
type Props = {};

const Footer = (props: Props) => {
  return (
    <>
     <section className="footer-section">
  <div className="container">
    <div className="row">
      <div className="col-lg-4">
        <div className="fs-about">
          <div className="fa-logo">
            <Link to="#"><img src="img/logo.png" /></Link>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore dolore magna aliqua endisse
            ultrices gravida lorem.
          </p>
          <div className="fa-social">
            <Link to="#"><i className="fa fa-facebook" /></Link>
            <Link to="#"><i className="fa fa-twitter" /></Link>
            <Link to="#"><i className="fa fa-youtube-play" /></Link>
            <Link to="#"><i className="fa fa-instagram" /></Link>
            <Link to="#"><i className="fa fa-envelope-o" /></Link>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-3 col-sm-6">
        <div className="fs-widget">
          <h4>Useful links</h4>
          <ul>
            <li><Link to="#">About</Link></li>
            <li><Link to="#">Blog</Link></li>
            <li><Link to="#">Classes</Link></li>
            <li><Link to="#">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-2 col-md-3 col-sm-6">
        <div className="fs-widget">
          <h4>Support</h4>
          <ul>
            <li><Link to="#">Login</Link></li>
            <li><Link to="#">My account</Link></li>
            <li><Link to="#">Subscribe</Link></li>
            <li><Link to="#">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="fs-widget">
          <h4>Tips &amp; Guides</h4>
          <div className="fw-recent">
            <h6>
              <Link to="#">Physical fitness may help prevent depression, anxiety</Link>
            </h6>
            <ul>
              <li>3 min read</li>
              <li>20 Comment</li>
            </ul>
          </div>
          <div className="fw-recent">
            <h6>
              <Link to="#">Fitness: The best exercise to lose belly fat and tone
                up...</Link>
            </h6>
            <ul>
              <li>3 min read</li>
              <li>20 Comment</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12 text-center">
        <div className="copyright-text">
          
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Footer Section End */}
      <div className="search-model">
        <div className="h-100 d-flex align-items-center justify-content-center">
          <div className="search-close-switch">+</div>
          <form className="search-model-form">
            {/* <input type="text" id="search-input" placeholder="Search here....."> */}
          </form>
        </div>
      </div>
      {/* Search model end  */}
    </>
  );
};

export default Footer;
