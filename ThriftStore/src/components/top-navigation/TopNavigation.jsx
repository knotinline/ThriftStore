import Logo from "../general-components/Logo";
import SearchBar from "../general-components/SearchBar";
import { BsFilterLeft } from "react-icons/bs";
import { BsEmojiWink } from "react-icons/bs";

function TopNavigation() {
    return (
        // <div className="flex justify-center items-center mt-5 px-4 sm:px-8 lg:px-16">
        <div className="flex items-center ">
            <div className="flex justify-center items-center mt-5 px-4 sm:px-8 lg:px-16  w-2/3">
                <Logo />
                <SearchBar />
                <button >
                    <BsFilterLeft className="w-7 h-7 mr-7 mt-2" />
                </button>
            </div>
            <div className="flex w-1/3 justify-end mt-4 pr-7">

                <button>
                    <BsEmojiWink className="w-9 h-9" />
                </button>
            </div>
        </div>
    );
}

export default TopNavigation;
