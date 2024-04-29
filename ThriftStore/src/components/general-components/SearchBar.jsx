import { BsSearchHeart } from "react-icons/bs";

function SearchBar() {

  return (
    <form  className="flex items-center  mt-3 ml-1">
      <input
        type="text"
        
        placeholder="What do you fancy?..."
        className="border border-gray-300 rounded-md px-4 py-2 mr-2 focus:outline-none focus:border-blue-500"/>
        <button
        type="submit"
        
      >
        <BsSearchHeart />
      </button>

      

    </form>
  );
}

export default SearchBar;
