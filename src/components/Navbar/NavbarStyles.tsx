import styled from "styled-components";

// Media queries https://www.w3schools.com/css/css_rwd_mediaqueries.asp

//The wrapper for our Navbar
export const NavbarOuter = styled.div`
    @media (max-width: 600px) {
        position: absolute;
        height: 172px;
        width: 100%;
        background-color: #bd1808;
    }
`;

//Wrapper for the logo and the textbox
export const LogoContainer = styled.div`
    @media (max-width: 600px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 96%;
        margin: 15px 0 0 2%;
        height: 32px;
        background-color: rgba(234, 234, 234, 0.2);
        border-radius: 4px;
        color: white;
        font-size: 24px;
    }
`;

export const LogoTextbox = styled.div`
    @media (max-width: 600px) {
        display: flex;
        justify-content: space-between;
        gap: 10px;
    }
`;

export const Logo = styled.img`
    @media (max-width: 600px) {
        width: 25px;
        margin-left: 8px;
    }
`;

export const DownArrow = styled.img`
    @media (max-width: 600px) {
        width: 25px;
        position: relative;
        bottom: 4px;
        right: 5px;
    }
`;

export const PokeBall = styled.img`
    @media (max-width: 600px) {
        width: 120px;
        position: absolute;
        right: 10px;
        top: 10px;
    }
`;

//The grid creates equally sized rows. Used by the search bar, pokeball and the type-tags.
export const GridContainer = styled.div`
    @media (max-width: 600px) {
        display: grid;
        margin-top: 20px;
        padding: 0 20px 0 20px;
        grid-template-rows: repeat(1fr);
        row-gap: 20px;
    }
`;

//Wrapper for the searchbar and pokeball button
export const SearchOuter = styled.div`
    @media (max-width: 600px) {
        display: grid;
        width: 100%;
        height: 40px;
        grid-template-columns: 4fr 1fr;
        grid-column-gap: 5px;

        .searchbar {
            border-radius: 6px;
            outline: none;
            border: 1px solid grey;
            background-color: #f8f8f8;
            padding-left: 10px;
            font-size: 15px;
        }
    }
`;

export const PokeBallBtnContainer = styled.div`
    @media (max-width: 600px) {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
    }
`;

export const PokeBallBtn = styled.img`
    @media (max-width: 600px) {
        width: 45px;
    }
`;

//Wrapper for the type-tags
export const TagOuter = styled.div`
    display: flex;
    height: 30px;
    gap: 20px;
    overflow-y: scroll;

    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* for Chrome, Safari, and Opera */
    }
`;

//Type tag such as Water, Bug, Fire, etc.
export const Tag = styled.div`
    color: #ffffff;
    padding: 2px 10px 2px 10px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 10px;
`;
//The bottom edge of the navbar
export const FilterOuter = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const NavbarEdge = styled.img`
    margin-top: 10px;

    &:hover {
        cursor: pointer;
    }
`;

//Filter icon to the left of the text
export const FilterIcon = styled.div``;

//"Filter your pokemon"
export const FilterText = styled.div``;

//The dropdown appears when "Filter your pokemon" is clicked
export const DropdownOuter = styled.div``;

//Header for "Types" and "Sort by"
export const DropdownHeader = styled.div`
    color: #ffffff;
`;

//Box and grid for the types-section
export const TypesBox = styled.div`
    background-color: rgba(255, 255, 255, 0.2);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

//Box and grid for the sort-by-section
export const SortByBox = styled.div`
    background-color: rgba(255, 255, 255, 0.2);
    display: grid;
    grid-template-columns: auto(minmax(100px, 1fr));
`;

//"Sort by"-tags such as "A - Z"
export const SortTag = styled.div`
    background-color: rgba(15, 10, 10, 0.5);
    color: #ffffff;
    padding: 2px 10px 2px 10px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 10px;
`;
