import React from 'react'
type Props = {}

const Homepage = (props: Props) => {
  return (
    <div>
      <div>
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
  {/* Get In Touch Section Begin */}
</div>

    </div>
  )
}

export default Homepage