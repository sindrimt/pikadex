import { useEffect, useState } from "react";

import navArrowDown from "../../assets/icons/navbarArrowDown.svg";
import pokeballIcon from "../../assets/icons/pokeball_icon.svg";
import logo from "../../assets/Logo.svg";
import navbarEdge from "../../assets/pageEdges/navbarEdge.svg";
import pokeball from "../../assets/Pokeball.svg";
import { useScroll } from "../../hooks/useScroll";
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
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
    ResetBtn,
    SearchBtn,
    SearchOuter,
    SortByBox,
    SortTag,
    Tag,
    TagOuter,
    TypesBox,
} from "./NavbarStyles";

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
    const [showSmallNavbar, setShowSmallNavbar] = useState<boolean>(false);

    useEffect(() => {
        console.log(showDropdown);
        decideHeight();
    }, [showDropdown]);

    const decideHeight = () => {
        showDropdown ? setHeight("fit-content") : setHeight("172px");
    };

    const yOffset = useScroll();

    let small = false;

    if (yOffset > 70) {
        small = true;
    }

    const checkHeight: () => string = () => {
        if (small) return "63px";
        else {
            return height;
        }
    };

    return (
        <>
            <NavbarOuter transition={small ? true : false} height={checkHeight()}>
                <LogoContainer>
                    <LogoTextbox>
                        <Logo src={logo} />
                        <div>Pikadex</div>
                    </LogoTextbox>
                    <DownArrow src={navArrowDown} />
                </LogoContainer>
                <PokeBall src={pokeball} />
                {small ? (
                    ""
                ) : (
                    <GridContainer>
                        {/* Grid row 1 */}
                        <SearchOuter>
                            {/* Grid column 1 */}
                            <input type="text" placeholder="Search by name or index" className="searchbar" />
                            <FontAwesomeIcon className="searchIcon" icon={faMagnifyingGlass} />
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
                )}

                {showDropdown && (
                    <>
                        <DropdownOuter>
                            <DropdownGridRow>
                                <DropdownHeader>Types</DropdownHeader>
                                <TypesBox>
                                    <TagOuter>
                                        {/* Map over the list of tags with colors and text */}
                                        {list.map((item: Array<string>) => (
                                            <Tag style={{ backgroundColor: `${item[1]}` }}>{item[0]}</Tag>
                                        ))}
                                    </TagOuter>
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
                    </>
                )}
                <FilterOuter>
                    <NavbarEdge src={navbarEdge} onClick={() => setShowDropdown(!showDropdown)} />
                </FilterOuter>
            </NavbarOuter>
        </>
    );
};

export default Navbar;
