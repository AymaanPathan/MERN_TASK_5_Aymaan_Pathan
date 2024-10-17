/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
function Filters({
  sortInput,
  setSortInput,
  searchInput,
  setSearchInput,
  categoryInput,
  setCategoryInput,
}) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 justify-between w-full p-4 sm:p-8  rounded-b-lg">
      <div className="border cursor-pointer rounded-lg outline-none">
        <select
          onChange={(e) => setSortInput(e.target.value)}
          value={sortInput}
          className="h-11 w-full sm:w-44 text-xs rounded-lg outline-none cursor-pointer"
        >
          <option value="">Sort By</option>
          <option value="High To Low">High To Low</option>
          <option value="Low To High">Low To High</option>
          <option value="Popular">Popular</option>
        </select>
      </div>
      <div className="flex items-center">
        <span className="text-gray-500 mr-2">Search:</span>
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="h-11 text-xs w-full sm:w-60 rounded-lg outline-none p-2"
          placeholder="Search"
        />
      </div>
      <div className="border cursor-pointer rounded-lg outline-none">
        <select
          value={categoryInput}
          onChange={(e) => setCategoryInput(e.target.value)}
          className="h-11 w-full sm:w-44 text-xs rounded-lg outline-none cursor-pointer"
        >
          <option value="">Category</option>
          <option value="All">All</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;
