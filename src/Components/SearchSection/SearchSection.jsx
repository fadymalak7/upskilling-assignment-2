import "./SearchSection.css";
import CarCard from "../CarCard/CarCard";
import { Link } from "react-router-dom";

export default function SearchSection({ carSearch, setCarSearch, limitCars }) {
  return (
    <section className="search-section py-5">
      <div className="container">
        <div className="input-group mb-3">
          <div className="search-wrapper position-relative">
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
            <input
              type="search"
              value={carSearch}
              onChange={(e) => setCarSearch(e.target.value)}
              className="form-control search-input"
              placeholder="Search By Name"
              aria-label="Search By Name"
            />
          </div>
        </div>
        <span className="my-badge mx-auto mb-3">POPULAR RENTAL deals</span>
        <h2 className="section-title mb-3 text-center">
          Most popular cars rental deals
        </h2>
        <div className="row">
          {limitCars.map((car) => (
            <CarCard car={car} key={car.id} carSearch={carSearch} />
          ))}

          {/* <div className="col-md-3">
              <div className="car-card">
                <div className="car-card-img mb-3">
                  <img
                    src="https://imgd.aeplcdn.com/664x374/n/cw/ec/144681/virtus-exterior-right-front-three-quarter-11.png?isig=0&q=80"
                    alt="car-image"
                    className="img-fluid object-fit-contain"
                  />
                </div>
                <h3 className="car-card-title mb-3">volkswagen</h3>
                <div className="reviews d-flex align-items-center mb-2">
                  <i className="fas fa-star me-1"></i>
                  <span className="review-num fw-bolder">4.6</span>
                  <span className="review-count text-muted">
                    (2,432 reviews)
                  </span>
                </div>
                <div className="row g-1 border-bottom border-2 pb-2 mb-2">
                  <div className="col-md-6">
                    <span className="car-spec">
                      <i className="fas fa-user"></i>
                      <span>4 passengers</span>
                    </span>
                  </div>
                  <div className="col-md-6">
                    <span className="car-spec">
                      <i className="fa-solid fa-gears"></i>
                      <span>Auto</span>
                    </span>
                  </div>
                  <div className="col-md-6">
                    <span className="car-spec">
                      <i className="fa-solid fa-snowflake"></i>
                      <span>Air Condition</span>
                    </span>
                  </div>
                  <div className="col-md-6">
                    <span className="car-spec">
                      <i className="fas fa-calendar"></i>
                      <span>2002</span>
                    </span>
                  </div>
                </div>
                <div className="price-wrapper d-flex justify-content-between align-items-center mb-4">
                  <h4>Price</h4>
                  <div className="price-value">
                    <strong>$1700 </strong>
                    <span className="text-muted">/day</span>
                  </div>
                </div>
                <div className="rent-btn">
                  <a href="#" className="main-btn">
                    Rent Now
                    <i className="fas fa-arrow-right mt-1"></i>
                  </a>
                </div>
              </div>
            </div> */}
        </div>

        <div className="d-flex justify-content-center mt-5">
          <Link to="/cars" className="outline-btn">
            Show all vehicles
            <i className="fas fa-arrow-right mt-1"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
