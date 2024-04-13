import React, { useState, useEffect } from "react";
import Shoecard from "../components/Shoecard";
import "../styles/Carousel.scss";
import Carousel from "../components/Carousel";
import data from "../assets/shoedata.json";

function Home() {
  const [shoes, setShoes] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [totalPages, setTotalPages] = useState(
    Math.ceil(shoes.length / itemsPerPage)
  );

  useEffect(() => {
    setTotalPages(Math.ceil(shoes.length / itemsPerPage));
  }, [shoes.length, itemsPerPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <Carousel />
      <div className="shoecard-grid">
        {/* {data.map((shoe) => (
          <Shoecard key={shoe.brand + shoe.style} {...shoe} /> // Pass all shoe properties
        ))} */}

        {shoes
          .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
          .map((shoe) => (
            <Shoecard key={shoe.brand + shoe.style} {...shoe} />
          ))}
      </div>
      {totalPages > 1 && (
          <div className="pagination">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
    </div>
  );
}

export default Home;
