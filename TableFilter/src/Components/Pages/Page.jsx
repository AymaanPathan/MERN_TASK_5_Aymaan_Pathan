/* eslint-disable react/prop-types */
function Page({ currentPage, setCurrentPage, pageCount }) {
  return (
    <div className="flex justify-center mt-4 p-8">
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
        className="px-4 cursor-pointer py-2 bg-yellow-700 text-white rounded-3xl"
      >
        Previous
      </button>
      <span className="px-4 py-2 text-gray-400">
        Page {currentPage} of {pageCount}
      </span>
      <button
        disabled={currentPage === pageCount}
        onClick={() => setCurrentPage(currentPage + 1)}
        className="px-4 cursor-pointer py-2 bg-yellow-700 text-white rounded-3xl"
      >
        Next
      </button>
    </div>
  );
}

export default Page;
