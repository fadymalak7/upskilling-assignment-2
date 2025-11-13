import axios from "axios";
import { useEffect, useState } from "react";
import CarCard from "../../Components/CarCard/CarCard";

export default function Cars() {
  const [cars, setCars] = useState([]);
  const [limitCars, setLimitCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios.get("https://myfakeapi.com/api/cars/").then((res) => {
      setCars(res.data.cars);
    });
  }, []);

  const itemsPerPage = 12;
  const lastItemNum = currentPage * itemsPerPage;
  const firstItemNum = lastItemNum - itemsPerPage;
  const totalPages = Math.ceil(cars.length / itemsPerPage);

  useEffect(() => {
    const slicedCars = cars.slice(firstItemNum, lastItemNum);
    setLimitCars(slicedCars);
  }, [firstItemNum, lastItemNum, cars]);

  function handlePageChange(pageNum) {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
    }
  }

  return (
    <div className="container">
      <div className="row g-3 py-5">
        {limitCars.map((car) => (
          <CarCard car={car} key={car.id} />
        ))}
      </div>

      <nav aria-label="Page navigation example mx-auto">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <button
              className={`page-link ${currentPage == 1 ? "disabled" : ""}`}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </button>
          </li>
          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .slice(
              Math.max(0, currentPage - 2),
              Math.min(totalPages, currentPage + 9)
            )
            .map((pageNumber) => (
              <li
                key={pageNumber}
                className={`page-item ${
                  currentPage === pageNumber ? "active" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => handlePageChange(pageNumber)}
                >
                  {pageNumber}
                </button>
              </li>
            ))}
          <li className="page-item">
            <button
              className={`page-link ${
                currentPage == totalPages ? "disabled" : ""
              }`}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
