import { useEffect, useState } from "react";

import navArrowDown from "../../assets/icons/navbarArrowDown.svg";
import pokeballIcon from "../../assets/icons/pokeball_icon.svg";
import logo from "../../assets/Logo.svg";
import navbarEdge from "../../assets/pageEdges/navbarEdge.svg";
import navbarEdgeLarge from "../../assets/pageEdges/navbarEdgeLarge.svg";
import pokeball from "../../assets/Pokeball.svg";
import { useScroll } from "../../hooks/useScroll";
import ReactDOM from "react-dom";
import { HiMagnifyingGlass } from "react-icons/hi2";
import {
    ButtonsContainer,
    DownArrow,
    DropdownGridRow,
    DropdownHeader,
    DropdownOuter,
    FilterOuter,
    GridContainer,
    Logo,
    LogoContainer,
    LogoTextbox,
    NavbarEdge,
    NavbarOuter,
    PokeBall,
    PokeBallBtn,
    PokeBallBtnContainer,
    PokemonContainer,
    ResetBtn,
    SearchBtn,
    SearchOuter,
    SortByBox,
    SortTag,
    Tag,
    SelectedTags,
    TypesBox,
    OverflowWrapper,
    TagGrid,
    DropdownContainer,
} from "./NavbarStyles";

import pikachu from "../../assets/Navbar/pokemon/pikachu.svg";
import charizard from "../../assets/Navbar/pokemon/charizard.svg";
import squirtle from "../../assets/Navbar/pokemon/squirtle.svg";
import charmander from "../../assets/Navbar/pokemon/charmander.svg";
import bulbasaur from "../../assets/Navbar/pokemon/bulbasaur.svg";

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
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const [height, setHeight] = useState<string>("172px");

    useEffect(() => {
        console.log(showDropdown);
        decideHeight();
    }, [showDropdown]);

    const decideHeight = () => {
        showDropdown ? setHeight("fit-content") : setHeight("172px");
    };

    const yOffsetThreshold = 70;

    const yOffset = useScroll();

    let small = false;

    if (yOffset > yOffsetThreshold) {
        small = true;
    }

    const checkHeight: () => string = () => {
        if (showDropdown) return "fit-content";
        else if (small) return "63px";
        else {
            return height;
        }
    };

    return (
        <>
            <NavbarOuter transition={small ? true : false} height={checkHeight()}>
                <OverflowWrapper>
                    <LogoContainer>
                        <LogoTextbox>
                            <Logo src={logo} />
                            <div>Pikadex</div>
                        </LogoTextbox>
                        <DownArrow src={navArrowDown} />
                    </LogoContainer>
                    <img
                        src={pikachu}
                        alt="pikachu"
                        className="pikachu"
                        style={{ display: !small || showDropdown ? "block" : "none" }}
                    />
                    <PokemonContainer style={{ display: !small || showDropdown ? "block" : "none" }}>
                        {/* <img src={bulbasaur} alt="bulbasaur" className="bulbasaur" />
                    <img src={charmander} alt="chcharmander" className="charmander" />
                    <img src={squirtle} alt="squirtle" className="squirtle" /> */}
                        <img src={charizard} alt="charizard" className="charizard" />
                        <img src={charizard} alt="charizard" className="charizard" />
                        <img src={charizard} alt="charizard" className="charizard" />
                        <img src={charizard} alt="charizard" className="charizard" />
                    </PokemonContainer>
                    <PokeBall src={pokeball} />
                    {small && !showDropdown ? (
                        ""
                    ) : (
                        <GridContainer>
                            {/* Grid row 1 */}
                            <SearchOuter>
                                <div className="filler"></div>
                                {/* Grid column 1 */}
                                <div className="searchContainer">
                                    <input type="text" placeholder="Search by name or index" className="searchbar" />
                                    <HiMagnifyingGlass size={25} className="searchIcon" />
                                </div>
                                {/* Grid column 2 */}
                                <PokeBallBtnContainer>
                                    <PokeBallBtn src={pokeballIcon} />
                                </PokeBallBtnContainer>
                            </SearchOuter>
                            {/* Grid row 2: selected type tags are displayed */}
                            <SelectedTags>
                                {/*Click on a tag in the filter and display them here*/}
                                <Tag>Water</Tag>
                                <Tag>Water</Tag>
                            </SelectedTags>
                        </GridContainer>
                    )}

                    {showDropdown && (
                        <>
                            <DropdownContainer>
                                <DropdownOuter>
                                    <DropdownGridRow>
                                        <DropdownHeader>Types</DropdownHeader>
                                        <TypesBox>
                                            <TagGrid>
                                                {/* Map over the list of tags with colors and text */}
                                                {list.map((item: Array<string>) => (
                                                    <Tag style={{ backgroundColor: `${item[1]}` }}>{item[0]}</Tag>
                                                ))}
                                            </TagGrid>
                                        </TypesBox>
                                    </DropdownGridRow>
                                    <DropdownGridRow>
                                        <DropdownHeader>Sort By</DropdownHeader>
                                        <SortByBox>
                                            <SortTag>A - Z</SortTag>
                                            <SortTag>Z - A</SortTag>
                                            <SortTag>Lowest No.</SortTag>
                                            <SortTag>Highest No.</SortTag>
                                            <SortTag style={{}}>Favorites</SortTag>
                                        </SortByBox>
                                    </DropdownGridRow>
                                    <DropdownGridRow>
                                        <ButtonsContainer>
                                            <ResetBtn>Reset</ResetBtn>
                                            <SearchBtn>Search</SearchBtn>
                                        </ButtonsContainer>
                                    </DropdownGridRow>
                                </DropdownOuter>
                            </DropdownContainer>
                        </>
                    )}
                </OverflowWrapper>
                <FilterOuter>
                    <NavbarEdge
                        // style={{ marginTop: small || showDropdown ? "50px" : "10px" }}
                        src={navbarEdge}
                        onClick={() => setShowDropdown(!showDropdown)}
                    />
                    {/*    <NavbarEdge src={navbarEdgeLarge} onClick={() => setShowDropdown(!showDropdown)} style={{ width: "400px" }} /> */}
                </FilterOuter>
            </NavbarOuter>
        </>
    );
};

export default Navbar;
