import React from "react";
import SearchBox from "../SearchBox/SearchBox";
import RandomButton from "../RandomButton/RandomButton";

import {
    LogoContainer,
    NavbarOuter,
    PokeBall,
    Logo,
    LogoTextbox,
    DownArrow,
    GridContainer,
    SearchOuter,
    PokeBallBtnContainer,
    PokeBallBtn,
    TagOuter,
    Tag,
} from "./NavbarStyles";
import pokeball from "../../assets/Pokeball.svg";
import logo from "../../assets/Logo.svg";
import navArrowDown from "../../assets/icons/navbarArrowDown.svg";
import pokeballIcon from "../../assets/icons/pokeball_icon.svg";
import search from "../../assets/icons/search.svg";

const Navbar = () => {
    return (
        <NavbarOuter>
            <LogoContainer>
                <LogoTextbox>
                    <Logo src={logo} />
                    <div>Pikadex</div>
                </LogoTextbox>
                <DownArrow src={navArrowDown} />
            </LogoContainer>
            <PokeBall src={pokeball} />

            <GridContainer>
                <SearchOuter>
                    <input type="text" placeholder="Search by name or index" className="searchbar" />
                    <PokeBallBtnContainer>
                        <PokeBallBtn src={pokeballIcon} />
                    </PokeBallBtnContainer>
                </SearchOuter>
                <TagOuter>
                    <Tag>
                        <div>x</div>
                        <div>Tag</div>
                    </Tag>
                    <Tag>
                        <div>x</div>
                        <div>Tag</div>
                    </Tag>
                    <Tag>
                        <div>x</div>
                        <div>Tag</div>
                    </Tag>
                </TagOuter>
            </GridContainer>
        </NavbarOuter>
    );
};

export default Navbar;
