import React from 'react'
import ImgBanner from "../templace/img/classes/class-1.jpg"
type Props = {}

const HomePage = (props: Props) => {
  return (
    <div>
      <section className="hero-section">
        <div className="hs-slider owl-carousel">
          <div className="hs-item set-bg" data-setbg={ImgBanner}>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-6">
                  <div className="hi-text">
                    <span>Shape your body</span>
                    <h1>Be <strong>strong</strong> traning hard</h1>
                    <a href="#" className="primary-btn">Get info</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hs-item set-bg" data-setbg={ImgBanner}>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 offset-lg-6">
                  <div className="hi-text">
                    <span>Shape your body</span>
                    <h1>Be <strong>strong</strong> traning hard</h1>
                    <a href="#" className="primary-btn">Get info</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}
      {/* ChoseUs Section Begin */}
      <section className="choseus-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span>Why chose us?</span>
                <h2>PUSH YOUR LIMITS FORWARD</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="cs-item">
                <span className="flaticon-034-stationary-bike" />
                <h4>Modern equipment</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="cs-item">
                <span className="flaticon-033-juice" />
                <h4>Healthy nutrition plan</h4>
                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="cs-item">
                <span className="flaticon-002-dumbell" />
                <h4>Proffesponal training plan</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="cs-item">
                <span className="flaticon-014-heart-beat" />
                <h4>Unique to your needs</h4>
                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ChoseUs Section End */}
      {/* Classes Section Begin */}
      <section className="classes-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span>Our Classes</span>
                <h2>WHAT WE CAN OFFER</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="class-item">
                <div className="ci-pic">
                  <img src="https://res.cloudinary.com/dixysmopg/image/upload/v1666499850/class-1_h1avzp.jpg" alt='' />
                </div>
                <div className="ci-text">
                  <span>STRENGTH</span>
                  <h5>Weightlifting</h5>
                  <a href="#"><i className="fa fa-angle-right" /></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="class-item">
                <div className="ci-pic">
                  <img src="https://res.cloudinary.com/dixysmopg/image/upload/v1666499850/class-2_qweoe3.jpg" alt='' />
                </div>
                <div className="ci-text">
                  <span>Cardio</span>
                  <h5>Indoor cycling</h5>
                  <a href="#"><i className="fa fa-angle-right" /></a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="class-item">
                <div className="ci-pic">
                  <img src="https://res.cloudinary.com/dixysmopg/image/upload/v1666499851/class-4_xw7gox.jpg" alt='' />
                </div>
                <div className="ci-text">
                  <span>STRENGTH</span>
                  <h5>Kettlebell power</h5>
                  <a href="#"><i className="fa fa-angle-right" /></a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="class-item">
                <div className="ci-pic">
                  <img src="https://res.cloudinary.com/dixysmopg/image/upload/v1666499850/class-3_sgwox9.jpg" alt='' />
                </div>
                <div className="ci-text">
                  <span>Cardio</span>
                  <h4>Indoor cycling</h4>
                  <a href="#"><i className="fa fa-angle-right" /></a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="class-item">
                <div className="ci-pic">
                  <img src="https://res.cloudinary.com/dixysmopg/image/upload/v1666499851/class-5_cvanlk.jpg" alt='' />
                </div>
                <div className="ci-text">
                  <span>Training</span>
                  <h4>Boxing</h4>
                  <a href="#"><i className="fa fa-angle-right" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ChoseUs Section End */}
      {/* Banner Section Begin */}
      <section className="banner-section set-bg" data-setbg="img/banner-bg.jpg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="bs-text">
                <h2>registration now to get more deals</h2>
                <div className="bt-tips">Where health, beauty and fitness meet.</div>
                <a href="#" className="primary-btn  btn-normal">Appointment</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Banner Section End */}
      {/* Pricing Section Begin */}
      <section className="pricing-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <span>Our Plan</span>
                <h2>Choose your pricing plan</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-8">
              <div className="ps-item">
                <h3>Class drop-in</h3>
                <div className="pi-price">
                  <h2>$ 39.0</h2>
                  <span>SINGLE CLASS</span>
                </div>
                <ul>
                  <li>Free riding</li>
                  <li>Unlimited equipments</li>
                  <li>Personal trainer</li>
                  <li>Weight losing classes</li>
                  <li>Month to mouth</li>
                  <li>No time restriction</li>
                </ul>
                <a href="#" className="primary-btn pricing-btn">Enroll now</a>
                <a href="#" className="thumb-icon"><i className="fa fa-picture-o" /></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-8">
              <div className="ps-item">
                <h3>12 Month unlimited</h3>
                <div className="pi-price">
                  <h2>$ 99.0</h2>
                  <span>SINGLE CLASS</span>
                </div>
                <ul>
                  <li>Free riding</li>
                  <li>Unlimited equipments</li>
                  <li>Personal trainer</li>
                  <li>Weight losing classes</li>
                  <li>Month to mouth</li>
                  <li>No time restriction</li>
                </ul>
                <a href="#" className="primary-btn pricing-btn">Enroll now</a>
                <a href="#" className="thumb-icon"><i className="fa fa-picture-o" /></a>
              </div>
            </div>
            <div className="col-lg-4 col-md-8">
              <div className="ps-item">
                <h3>6 Month unlimited</h3>
                <div className="pi-price">
                  <h2>$ 59.0</h2>
                  <span>SINGLE CLASS</span>
                </div>
                <ul>
                  <li>Free riding</li>
                  <li>Unlimited equipments</li>
                  <li>Personal trainer</li>
                  <li>Weight losing classes</li>
                  <li>Month to mouth</li>
                  <li>No time restriction</li>
                </ul>
                <a href="#" className="primary-btn pricing-btn">Enroll now</a>
                <a href="#" className="thumb-icon"><i className="fa fa-picture-o" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section End */}
      {/* Gallery Section Begin */}
      <div className="gallery-section">
        <div className="gallery">
          <div className="grid-sizer" />
          <div className="gs-item grid-wide set-bg" data-setbg="img/gallery/gallery-1.jpg">
            <a href="img/gallery/gallery-1.jpg" className="thumb-icon image-popup"><i className="fa fa-picture-o" /></a>
          </div>
          <div className="gs-item set-bg" data-setbg="img/gallery/gallery-2.jpg">
            <a href="img/gallery/gallery-2.jpg" className="thumb-icon image-popup"><i className="fa fa-picture-o" /></a>
          </div>
          <div className="gs-item set-bg" data-setbg="img/gallery/gallery-3.jpg">
            <a href="img/gallery/gallery-3.jpg" className="thumb-icon image-popup"><i className="fa fa-picture-o" /></a>
          </div>
          <div className="gs-item set-bg" data-setbg="img/gallery/gallery-4.jpg">
            <a href="img/gallery/gallery-4.jpg" className="thumb-icon image-popup"><i className="fa fa-picture-o" /></a>
          </div>
          <div className="gs-item set-bg" data-setbg="img/gallery/gallery-5.jpg">
            <a href="img/gallery/gallery-5.jpg" className="thumb-icon image-popup"><i className="fa fa-picture-o" /></a>
          </div>
          <div className="gs-item grid-wide set-bg" data-setbg="img/gallery/gallery-6.jpg">
            <a href="img/gallery/gallery-6.jpg" className="thumb-icon image-popup"><i className="fa fa-picture-o" /></a>
          </div>
        </div>
      </div>
      {/* Gallery Section End */}
      {/* Team Section Begin */}
      <section className="team-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="team-title">
                <div className="section-title">
                  <span>Our Team</span>
                  <h2>TRAIN WITH EXPERTS</h2>
                </div>
                <a href="#" className="primary-btn btn-normal appoinment-btn">appointment</a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="ts-slider owl-carousel">
              <div className="col-lg-4">
                <div className="ts-item set-bg" data-setbg="img/team/team-1.jpg">
                  <div className="ts_text">
                    <h4>Athart Rachel</h4>
                    <span>Gym Trainer</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="ts-item set-bg" data-setbg="img/team/team-2.jpg">
                  <div className="ts_text">
                    <h4>Athart Rachel</h4>
                    <span>Gym Trainer</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="ts-item set-bg" data-setbg="img/team/team-3.jpg">
                  <div className="ts_text">
                    <h4>Athart Rachel</h4>
                    <span>Gym Trainer</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="ts-item set-bg" data-setbg="img/team/team-4.jpg">
                  <div className="ts_text">
                    <h4>Athart Rachel</h4>
                    <span>Gym Trainer</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="ts-item set-bg" data-setbg="img/team/team-5.jpg">
                  <div className="ts_text">
                    <h4>Athart Rachel</h4>
                    <span>Gym Trainer</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="ts-item set-bg" data-setbg="img/team/team-6.jpg">
                  <div className="ts_text">
                    <h4>Athart Rachel</h4>
                    <span>Gym Trainer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section End */}
    </div>

  )
}

export default HomePage