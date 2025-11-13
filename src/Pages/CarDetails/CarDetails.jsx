import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./CarDetails.css";

export default function CarDetails() {
  const [car, setCar] = useState([]);
  const { id } = useParams();

  console.log(id);
  useEffect(() => {
    axios.get(`https://myfakeapi.com/api/cars/${id}`).then((res) => {
      setCar(res.data.Car);
    });
  }, [id]);

  return (
    <>
      <section className="details-page">
        <div className="row">
          <div className="col-md-5">
            <div className="details-image">
              <img src="/audi.png" alt="audi image" className="img-fluid" />
              <img
                src="/details-pattern.png"
                alt="pattern"
                className="details-pattern"
              />
            </div>
          </div>
          <div className="col-md-7">
            <div className="details-content">
              <span className="my-badge mb-3">WHY CHOOSE US</span>
              <h2 className="section-title mb-4">
                We offer the best experience with our rental deals
              </h2>

              <div className="car-info-wrapper">
                <h3 className="car-title">
                  {car.car} {car.car_model}
                </h3>
                <ul className="car-info">
                  <li className="text-muted d-flex align-items-center gap-3 mb-2">
                    <i className="fas fa-user"></i>
                    <span>4 passengers</span>
                  </li>
                  <li className="text-muted d-flex align-items-center gap-3 mb-2">
                    <i className="fa-solid fa-gears"></i>
                    <span>Auto</span>
                  </li>
                  <li className="text-muted d-flex align-items-center gap-3 mb-2">
                    <i className="fa-solid fa-snowflake"></i>
                    <span>Air Condition</span>
                  </li>
                  <li className="text-muted d-flex align-items-center gap-3 mb-2">
                    <i className="fas fa-calendar"></i>
                    <span>{car.car_model_year}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
