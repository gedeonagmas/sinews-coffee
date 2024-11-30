import React from "react";
import Link from "next/link";
// import "./sty.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    for (
      let i = Math.max(1, currentPage - 1);
      i <= Math.min(totalPages, currentPage + 1);
      i++
    ) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <div className="pagination-wrapper mt_20 centred">
      <div className="pagination flex items-center justify-center gap-2">
        {/* Previous Button */}
        {currentPage > 1 && (
          <Link
            href="#"
            className="prev"
            onClick={() => onPageChange(currentPage - 1)}
          >
            prev
          </Link>
        )}

        {/* Page Numbers */}
        {getPageNumbers().map((number, i) => (
          <ul
            key={i}
            style={{ listStyleType: "none", padding: "0px", margin: "0px" }}
          >
            <li>
              <Link
                href="#"
                style={{
                  background: number === currentPage ? "red" : "",
                  color: number === currentPage ? "white" : "",
                }}
                className={`page-number hover:text-white ${
                  number === currentPage
                    ? "current bg-red hover:text-white"
                    : ""
                }`}
                onClick={() => onPageChange(number)}
              >
                {number}
              </Link>
            </li>
          </ul>
        ))}

        {/* Next Button */}
        {currentPage < totalPages && (
          <Link
            href="#"
            className="next hover:border-none  text-red"
            onClick={() => onPageChange(currentPage + 1)}
          >
            next
          </Link>
        )}
      </div>
    </div>
  );
};

export default Pagination;
