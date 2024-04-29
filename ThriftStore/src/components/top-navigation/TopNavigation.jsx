import Logo from "../general-components/Logo";
import SearchBar from "../general-components/SearchBar";
function TopNavigation() {
    return ( 
        <div className=" flex"> 
        <Logo/>
        <SearchBar/>
        </div>
     );
}

export default TopNavigation;
