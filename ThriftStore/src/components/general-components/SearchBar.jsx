
function SearchBar() {

  return (
    <form  className="flex items-center ">
      <input
        type="text"
        
        placeholder="What do you fancy?..."
        className="border border-gray-300 rounded-md px-4 py-2 mr-2 focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Search
      </button>

    </form>
  );
}

export default SearchBar;
