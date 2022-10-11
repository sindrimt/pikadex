import React from "react";
import "./Navbar.css";
import SearchBox from "../SearchBox/SearchBox"; 
// import Logo from "../Logo/Logo";
import RandomButton from "../RandomButton/RandomButton";


const Navbar = () => {
    return (
        <div className="Header">
            <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
                <img id="pokeball" src="pokeball_dark.png" alt="Pokeball" width="30" height="30"></img> 

                <h1 id="logo">Pikadex</h1>
         <div className="searchbox"> 
                    <SearchBox />
                    <RandomButton />
        </div>
        </div>
    );
};

export default Navbar;