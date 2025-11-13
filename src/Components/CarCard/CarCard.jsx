import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CarCard.css";

export default function CarCard({ car, carSearch }) {
  const [imageUrl, setImageUrl] = useState("");

  function highlightSearchText(text, query) {
    if (!query) return text;

    const regex = new RegExp(`(${query})`, "gi");
    const textParts = text.split(regex);

    return textParts.map((part) =>
      part.toLowerCase() == query.toLowerCase() ? (
        <span className="highlightedText">{part}</span>
      ) : (
        part
      )
    );
  }

  useEffect(() => {
    async function fetchImage() {
      const res = await axios.get(
        `https://www.carimagery.com/api.asmx/GetImageUrl?searchTerm=${car.car}+${car.car_model}`
      );
      const match = res.data.match(/<string.*?>(.*?)<\/string>/);
      const url = match ? match[1] : "";
      setImageUrl(url);
    }
    fetchImage();
  }, [car.car, car.car_model]);

  return (
    // <div className="col-md-3">
    //   <img src={imageUrl} className="img-fluid" alt={`${car.car} image`} />
    //   <h2>{highlightSearchText(car.car, carSearch)}</h2>
    // </div>

    <div className="col-md-3">
      <div className="car-card">
        <div className="car-card-img text-center mb-3">
          <img src={imageUrl} alt={`${car.car} image`} className="car-img" />
        </div>
        <h2 className="car-card-title mb-3">
          {highlightSearchText(car.car, carSearch)} {car.car_model}
        </h2>
        <div className="reviews d-flex align-items-center mb-2">
          <i className="fas fa-star me-1"></i>
          <span className="review-num fw-bolder">4.6</span>
          <span className="review-count text-muted">(2,432 reviews)</span>
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
              <span>{car.car_model_year}</span>
            </span>
          </div>
        </div>
        <div className="price-wrapper d-flex justify-content-between align-items-center mb-4">
          <h3>Price</h3>
          <div className="price-value">
            <strong>{car.price} </strong>
            <span className="text-muted">/day</span>
          </div>
        </div>
        <div className="rent-btn">
          <Link to={`/car-details/${car.id}`} className="main-btn">
            Rent Now
            <i className="fas fa-arrow-right mt-1"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
