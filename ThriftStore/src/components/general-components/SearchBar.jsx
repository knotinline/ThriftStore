import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
    return (
        <div className="relative flex-grow max-w-xs">
            <form className="relative rounded-full hover:border-transparent">
                <div className="flex items-center">
                    <input
                        type="text"
                        placeholder="What do you fancy?"
                        className="w-full rounded-full p-4 h-10 focus:outline-none hover:shadow-lg focus:shadow-xl shadow-md"
                    />
                    <button
                        type="submit"
                        className="rounded-full p-1 h-10"
                    >
                        <IoSearch />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;


