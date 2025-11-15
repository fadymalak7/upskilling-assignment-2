import React from "react";

export default function WhyUs() {
  return (
    <section className="why-us position-relative overflow-hidden py-5">
      <div className="row">
        <div className="col-md-5">
          <div className="why-us-image">
            <img src="/audi.png" alt="audi image" className="img-fluid" />
            <img
              src="/details-pattern.png"
              alt="pattern"
              className="details-pattern"
            />
          </div>
        </div>
        <div className="col-md-7">
          <div className="details-content px-4 px-md-0">
            <span className="my-badge mb-3">WHY CHOOSE US</span>
            <h2 className="section-title mb-4">
              We offer the best experience with our rental deals
            </h2>
            <div className="services">
              <div className="service d-flex gap-3 mb-3">
                <div className="icon-wrapper">
                  <div
                    className="d-inline-flex align-items-center justify-content-center rounded-3 mb-3"
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "#1572D31A",
                    }}
                  >
                    <i
                      className="fas fa-sack-dollar fs-4"
                      style={{
                        color: "#1572D3",
                      }}
                    ></i>
                  </div>
                </div>
                <div className="text-wrapper">
                  <h6 className="fw-bold mb-1">Best price guaranteed</h6>
                  <p className="text-muted small mb-0">
                    Find a lower price? We’ll refund you 100% of the difference.
                  </p>
                </div>
              </div>
              <div className="service d-flex gap-3 mb-3">
                <div className="icon-wrapper">
                  <div
                    className="d-inline-flex align-items-center justify-content-center rounded-3 mb-3"
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "#1572D31A",
                    }}
                  >
                    <i
                      className="fas fa-user-check fs-4"
                      style={{
                        color: "#1572D3",
                      }}
                    ></i>
                  </div>
                </div>
                <div className="text-wrapper">
                  <h6 className="fw-bold mb-1">Experience driver</h6>
                  <p className="text-muted small mb-0">
                    Don’t have driver? Don’t worry, we have many experienced
                    driver for you.
                  </p>
                </div>
              </div>
              <div className="service d-flex gap-3 mb-3">
                <div className="icon-wrapper">
                  <div
                    className="d-inline-flex align-items-center justify-content-center rounded-3 mb-3"
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "#1572D31A",
                    }}
                  >
                    <i
                      className="fas fa-message fs-4"
                      style={{
                        color: "#1572D3",
                      }}
                    ></i>
                  </div>
                </div>
                <div className="text-wrapper">
                  <h6 className="fw-bold mb-1">24 hour car delivery</h6>
                  <p className="text-muted small mb-0">
                    Book your car anytime and we will deliver it directly to
                    you.
                  </p>
                </div>
              </div>
              <div className="service d-flex gap-3 mb-3">
                <div className="icon-wrapper">
                  <div
                    className="d-inline-flex align-items-center justify-content-center rounded-3 mb-3"
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "#1572D31A",
                    }}
                  >
                    <i
                      className="fas fa-comments fs-4"
                      style={{
                        color: "#1572D3",
                      }}
                    ></i>
                  </div>
                </div>
                <div className="text-wrapper">
                  <h6 className="fw-bold mb-1">24/7 technical support</h6>
                  <p className="text-muted small mb-0">
                    Have a question? Contact Rentcars support any time when you
                    have problem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
