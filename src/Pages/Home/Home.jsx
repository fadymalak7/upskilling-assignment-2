import axios from "axios";
import Hero from "../../Components/Hero/Hero";
import "./Home.css";
import { useState, useEffect } from "react";
import CarCard from "../../Components/CarCard/CarCard";
import HowItWork from "../../Components/HowItWork/HowItWork";
import { Link } from "react-router-dom";
import WhyUs from "../../Components/WhyUs/WhyUs";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Booking from "../../Components/Booking/Booking";
import LogoSlider from "../../Components/LogoSlider/LogoSlider";
import SearchSection from "../../Components/SearchSection/SearchSection";

export default function Home() {
  const [allCars, setAllCars] = useState([]);
  const [limitCars, setLimitCars] = useState([]);
  const [carSearch, setCarSearch] = useState("");
  const steps = [
    {
      icon: "fa-check-circle",
      title: "Choose location",
      description: "Choose your and find your best car",
    },
    {
      icon: "fa-calendar-alt",
      title: "Pick-up date",
      description: "Select your pick up date and return your car",
    },
    {
      icon: "fa-car",
      title: "Book your car",
      description: "Book your car and we will deliver it directly to you",
    },
  ];

  useEffect(() => {
    axios.get("https://myfakeapi.com/api/cars/").then((res) => {
      setAllCars(res.data.cars);
    });
  }, []);

  useEffect(() => {
    if (carSearch) {
      const filteredCars = allCars.filter((car) =>
        car.car.toLowerCase().includes(carSearch.toLowerCase())
      );
      setLimitCars(filteredCars.slice(0, 4));
    } else {
      setLimitCars(allCars.slice(0, 4));
    }
  }, [carSearch, allCars]);

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Search Section */}
      <SearchSection
        carSearch={carSearch}
        setCarSearch={setCarSearch}
        limitCars={limitCars}
      />
      {/* How it work Section */}
      <HowItWork steps={steps} />

      {/* Logo slider */}
      <LogoSlider />

      {/* Why Us Section */}
      <WhyUs />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Booking Section */}
      <Booking />
    </>
  );
}
