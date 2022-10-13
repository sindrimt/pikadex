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
    FilterOuter,
    NavbarEdge,
} from "./NavbarStyles";
import pokeball from "../../assets/Pokeball.svg";
import logo from "../../assets/Logo.svg";
import navArrowDown from "../../assets/icons/navbarArrowDown.svg";
import pokeballIcon from "../../assets/icons/pokeball_icon.svg";
import search from "../../assets/icons/search.svg";
import navbarEdge from "../../assets/pageEdges/navbarEdge.svg";

//Retrieved from https://gist.github.com/apaleslimghost/0d25ec801ca4fc43317bcff298af43c3
const list = [
    ["normal", "#A8A77A"],
    ["fire", "#EE8130"],
    ["water", "#6390F0"],
    ["electric", "#F7D02C"],
    ["grass", "#7AC74C"],
    ["ice", "#96D9D6"],
    ["fighting", "#C22E28"],
    ["poison", "#A33EA1"],
    ["ground", "#E2BF65"],
    ["flying", "#A98FF3"],
    ["psychic", "#F95587"],
    ["bug", "#A6B91A"],
    ["rock", "#B6A136"],
    ["ghost", "#735797"],
    ["dragon", "#6F35FC"],
    ["dark", "#705746"],
    ["steel", "#B7B7CE"],
    ["fairy", "#D685AD"],
];

const Navbar = () => {
    return (
        <>
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
                    {/* Grid row 1 */}
                    <SearchOuter>
                        {/* Grid column 1 */}
                        <input type="text" placeholder="Search by name or index" className="searchbar" />
                        {/* Grid column 2 */}
                        <PokeBallBtnContainer>
                            <PokeBallBtn src={pokeballIcon} />
                        </PokeBallBtnContainer>
                    </SearchOuter>
                    {/* Grid row 2 */}
                    <TagOuter>
                        {/* Map over the list of tags with colors and text */}
                        {list.map((item: Array<string>) => (
                            <Tag style={{ backgroundColor: `${item[1]}` }}>{item[0]}</Tag>
                        ))}
                    </TagOuter>
                </GridContainer>
                <FilterOuter>
                    <NavbarEdge src={navbarEdge} />
                </FilterOuter>
            </NavbarOuter>
        </>
    );
};

export default Navbar;
