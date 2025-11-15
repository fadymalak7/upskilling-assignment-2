import React from "react";

export default function TestimonialCard({ testimonial }) {
  const { img, rating, reviewText, name, address } = testimonial;

  return (
    <div className="testimonial-card d-flex">
      <div className="person-img">
        <img src={img} alt="person image" />
      </div>
      <div className="person-test-details d-flex flex-column justify-content-between gap-4 p-4">
        <div className="person-review">
          <div className="d-flex align-items-end">
            <h3>{rating}</h3>
            <span>Stars</span>
          </div>
          <div className="stars">
            <i className="fas fa-star star me-1"></i>
            <i className="fas fa-star star me-1"></i>
            <i className="fas fa-star star me-1"></i>
            <i className="fas fa-star star me-1"></i>
            <i className="fas fa-star star "></i>
          </div>
        </div>
        <p className="person-feedback">{reviewText}</p>
        <div className="person-info">
          <h4 className="person-name mb-1">{name}</h4>
          <small className="person-address text-muted">{address}</small>
        </div>
      </div>
    </div>
  );
}
