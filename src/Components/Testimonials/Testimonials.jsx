// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

import "./testimonials.css";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      img: "/person-1.jpg",
      rating: 5.0,
      reviewText:
        "I feel very secure when using Caretall's services. The customer support is excellent and the drivers are always punctual.",
      name: "Charlie Johnson",
      address: "From New York, US",
    },
    {
      id: 2,
      img: "/person-2.jpg",
      rating: 4.8,
      reviewText:
        "Amazing experience! The booking process was smooth and the service quality exceeded my expectations.",
      name: "Sophia Martinez",
      address: "From Austin, US",
    },
    {
      id: 3,
      img: "/person-1.jpg",
      rating: 5.0,
      reviewText:
        "One of the most reliable transport services I’ve used. The driver was kind and very professional.",
      name: "Liam Anderson",
      address: "From Toronto, Canada",
    },
    {
      id: 4,
      img: "/person-2.jpg",
      rating: 4.9,
      reviewText:
        "Great service! I always feel safe and well taken care of. Highly recommended for anyone needing reliable transport.",
      name: "Emily Carter",
      address: "From London, UK",
    },
    {
      id: 5,
      img: "/person-1.jpg",
      rating: 4.7,
      reviewText:
        "Customer care was extremely helpful and the ride was comfortable. Will definitely use the service again.",
      name: "Noah Wilson",
      address: "From Sydney, Australia",
    },
  ];

  return (
    <section className="testimonials py-5">
      <div className="container">
        <span className="my-badge mb-3 mx-auto">TESTIMONIALS</span>
        <h2 className="section-title mb-4 text-center">
          What peole say about us?
        </h2>
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={2.5}
        style={{ padding: "40px 0px" }}
        grabCursor={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 30,
          },
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <TestimonialCard testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
