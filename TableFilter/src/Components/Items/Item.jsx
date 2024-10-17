/* eslint-disable no-unused-vars */
import data from "../../Data/Data";
import { useState } from "react";
import Filters from "../Filters/Filters";
import Page from "../Pages/Page";

function Item() {
  const [sortInput, setSortInput] = useState("Popular");
  const [searchInput, setSearchInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("All");
  const [postPerPage, setPostPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredItems = data
    .filter((item) =>
      item.name.includes(
        searchInput
          .split(" ")
          .map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
          })
          .join(" ")
      )
    )
    .filter((item) => {
      if (item.category.includes(categoryInput)) {
        return item;
      } else if (categoryInput === "All") {
        return item;
      }
    })
    .sort((a, b) => {
      if (sortInput === "High To Low") {
        return b.price - a.price;
      } else if (sortInput === "Low To High") {
        return a.price - b.price;
      } else if (sortInput === "Popular") {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });

  const pageCount = Math.ceil(filteredItems.length / postPerPage);
  const startIndex = (currentPage - 1) * postPerPage;
  const item = filteredItems.slice(startIndex, startIndex + postPerPage);

  return (
    <div className="container mx-auto px-4">
      <Filters
        setSortInput={setSortInput}
        sortInput={sortInput}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setCategoryInput={setCategoryInput}
      />

      <div className="grid select-none cursor-pointer grid-cols-1 lg:grid-cols-3  sm:grid-cols-2  gap-6 ">
        {filteredItems.length >= 1 ? (
          item.map((item, i) => {
            return (
              <div
                className="w-full sm:w-72 h-full border border-gray-200 rounded-2xl shadow-lg overflow-hidden group transform transition duration-300 "
                key={i}
              >
                <div className="relative">
                  <img
                    className="w-full h-48 object-cover transition-transform duration-300 transform "
                    src={item.image}
                    alt={item.name || "Item Image"}
                  />
                  <div className="absolute inset-0 bg-gray-500 opacity-0 transition-opacity duration-300 group-hover:opacity-50"></div>
                </div>
                <div className="p-4 bg-white">
                  <h1 className="text-lg font-semibold text-gray-800 hover:text-yellow-500 transition-colors duration-150">
                    {item.name}
                  </h1>
                  <span className="text-xs text-gray-600">
                    <span className="text-gray-400">Category:</span>{" "}
                    {item.category}
                  </span>
                  <p className="mt-2 text-lg font-medium text-gray-900">
                    Price:{" "}
                    <span className="text-yellow-500">{item.price}/-</span> only
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-500">No Item Found</p>
        )}
      </div>
      <Page
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        pageCount={pageCount}
      />
    </div>
  );
}

export default Item;
