import "./Booking.css";
export default function Booking() {
  return (
    <section className="booking-section position-relative pt-3">
      <img
        src="/details-pattern.png"
        className="position-absolute booking-pattern"
        alt="pattern image"
      />
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="booking-content">
            <h2 className="section-title mb-3">
              Download Rentcars App for FREE
            </h2>
            <p>For faster, easier booking and exclusive deals.</p>

            <div className="download-btns d-flex align-items-center gap-2 mb-5">
              <a href="#" className="download-btn">
                <img
                  src="/google-play.png"
                  alt="google play"
                  className="img-fluid"
                />
              </a>
              <a href="#" className="download-btn">
                <img
                  src="/app-store.png"
                  alt="app store"
                  className="img-fluid"
                />
              </a>
            </div>

            <form className="booking-form">
              <input type="text" placeholder="Your name" name="name" />
              <input type="tel" placeholder="Ypur Phone Number" name="phone" />
              <input type="email" placeholder="Your Email" name="email" />
              <button type="submit" className="main-btn border-0">
                Send
              </button>
            </form>
          </div>
          <div className="booking-img align-self-end">
            <img
              src="/phone.png"
              className="img-fluid"
              width={"500px"}
              alt="phone image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
