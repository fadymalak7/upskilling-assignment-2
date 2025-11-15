export default function Hero() {
  return (
    <div className="hero-page">
      <div className="container">
        <section className="hero-section d-flex justify-content-between align-items-center">
          <div className="hero-text">
            <h1>
              Find, book and rent a car <span>Easily</span>
            </h1>
            <p>
              Get a car wherever and whenever you need it with your IOS and
              Android device.
            </p>

            <div className="download-btns d-flex align-items-center gap-2">
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
          </div>
          <div className="hero-img">
            <img src="/hero-car.png" alt="car image" className="img-fluid" />
          </div>
          <img src="/hero-pattern.png" className="pattern-bg" alt="pattern" />
        </section>
      </div>
    </div>
  );
}
