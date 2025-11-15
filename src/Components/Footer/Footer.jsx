import "./Footer.css";
export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-top">
            <div className="row justify-content-between">
              <div className="col-lg-4 col-md-6 footer-section">
                <a href="#" className="d-block footer-logo mb-3">
                  <img
                    src="/white-logo.png"
                    className="img-fluid"
                    alt="logo"
                    width={"120px"}
                  />
                </a>
                <ul className="footer-links contact-info">
                  <li>
                    <a href="#">
                      <img src="/location-pin.svg" alt="location icon" />
                      25566 Hc 1, Glenallen, Alaska, 99588, USA
                    </a>
                  </li>
                  <li>
                    <a href="mailto:rentcars@gmail.com">
                      <img src="/envolpe.svg" alt="email icon" />
                      rentcars@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+6034784273 12">
                      <img src="/phone.svg" alt="phone icon" />
                      +603 4784 273 12
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-6 footer-section">
                <h3 className="footer-title">Our Product</h3>
                <ul className="footer-links">
                  <li>
                    <a href="#">Career</a>
                  </li>
                  <li>
                    <a href="#">Cars</a>
                  </li>
                  <li>
                    <a href="#">Packages</a>
                  </li>
                  <li>
                    <a href="#">Features</a>
                  </li>
                  <li>
                    <a href="#">Priceline</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-6 footer-section">
                <h3 className="footer-title">Resources</h3>
                <ul className="footer-links">
                  <li>
                    <a href="#">Download</a>
                  </li>
                  <li>
                    <a href="#">Help Center</a>
                  </li>
                  <li>
                    <a href="#">Guides</a>
                  </li>
                  <li>
                    <a href="#">Partner Network</a>
                  </li>
                  <li>
                    <a href="#">Developer</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-6 footer-section">
                <h3 className="footer-title">About Rent Cars</h3>
                <ul className="footer-links">
                  <li>
                    <a href="#">Why Choose Us</a>
                  </li>
                  <li>
                    <a href="#">Our Story</a>
                  </li>
                  <li>
                    <a href="#">Investor Relations</a>
                  </li>
                  <li>
                    <a href="#">Press Center</a>
                  </li>
                  <li>
                    <a href="#">Advertise</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-6 footer-section">
                <h3 className="footer-title">Follow Us</h3>
                <div className="follow-us">
                  <div className="follow-social d-flex align-items-center gap-2">
                    <a href="#" target="_blank" className="follow-social-icon">
                      <i className="fa fa-brands fa-facebook"></i>
                    </a>
                    <a href="#" target="_blank" className="follow-social-icon">
                      <i className="fa fa-brands fa-instagram"></i>
                    </a>
                    <a href="#" target="_blank" className="follow-social-icon">
                      <i className="fa fa-brands fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            <div className="copyright-content d-flex flex-wrap gap-2 justify-content-center justify-content-sm-between align-items-center">
              <p className="mb-0 mt-3">
                Copyright 2023 ・ Rentcars, All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
