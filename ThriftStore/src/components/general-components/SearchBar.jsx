// import { IoSearch } from "react-icons/io5";

// const SearchBar = () => {
//     return (
//         <div className="relative flex-grow max-w-xs">
//             <form className="relative rounded-full hover:border-transparent">
//                 <div className="flex items-center">
//                     <input
//                         type="text"
//                         placeholder="What do you fancy?"
//                         className="w-full rounded-full p-4 h-10 focus:outline-none hover:shadow-lg focus:shadow-xl shadow-md"
//                     />
//                     <button
//                         type="submit"
//                         className="rounded-full p-1 h-10"
//                     >
//                         <IoSearch />
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default SearchBar;


import { IoSearch } from "react-icons/io5";
import { useState } from "react";

const SearchBar = () => {
    const [query, setQuery] = useState("");

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <div className="relative flex-grow max-w-xs">
            <form className="relative rounded-full hover:border-transparent">
                <div className="relative flex items-center">
                    <input
                        type="text"
                        placeholder="What do you fancy?"
                        className="w-full rounded-full p-4 h-10 focus:outline-none hover:shadow-lg focus:shadow-xl shadow-md pl-10 "
                        value={query}
                        onChange={handleInputChange}
                    />
                    <button
                        type="submit"
                        className="absolute inset-y-0 left-0 flex items-center justify-center rounded-l-full bg-white p-1 h-10"
                    >
                        <IoSearch className=" text-gray-500 mt-1 ml-2"/>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
