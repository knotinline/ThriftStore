import Logo from "../general-components/Logo";
import SearchBar from "../general-components/SearchBar";
import { BsFilterLeft } from "react-icons/bs";
import { BsEmojiWink } from "react-icons/bs";

function TopNavigation() {
    return (
        <div className=" flex mt-5 items-center">
            <Logo />
            <SearchBar  />
            <div className=" flex left-0 ">
                <BsFilterLeft className=" w-9 h-9  left-0  mr-7 " />
                <BsEmojiWink className=" w-9 h-9 " />
            </div>

        </div>

    );
}

export default TopNavigation;
