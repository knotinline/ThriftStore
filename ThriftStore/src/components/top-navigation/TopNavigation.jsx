import Logo from "../general-components/Logo";
import SearchBar from "../general-components/SearchBar";
import UserMenu from "./user-menu/UserMenu";
import { BsFilterLeft } from "react-icons/bs";


function TopNavigation() {
    return (
        <div className="flex justify-between items-center mt-5 px-4 sm:px-8 lg:px-16">
            <div className="flex items-center">
                <Logo />
                <SearchBar />
            </div>
            <div className="flex items-center">
                <button >
                    <BsFilterLeft className="w-9 h-9 mr-7" />
                </button>
                <button>
                    <UserMenu/>
                </button>
            </div>
        </div>
    );
}

export default TopNavigation;
