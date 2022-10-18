import styled from "styled-components";

// Media queries https://www.w3schools.com/css/css_rwd_mediaqueries.asp

interface Epic {
    height: any;
    transition: any;
}

//The wrapper for our Navbar
export const NavbarOuter = styled.div<Epic>`
    // Sets only animation when scrolling down
    transition: ${(props) => (props.transition ? "0.3s all" : "0s")};
    height: ${(props) => props.height};
    position: fixed;
    width: 100%;
    background-color: #bd1808;

    .pikachu {
        position: fixed;

        @media (max-width: 600px) {
            visibility: hidden;
        }
    }

    @media (max-width: 600px) {
        // Sets only animation when scrolling down
        transition: ${(props) => (props.transition ? "0.3s all" : "0s")};
        height: ${(props) => props.height};
        position: fixed;
        width: 100%;
        background-color: #bd1808;
    }
`;

//Wrapper for the logo and the textbox
export const LogoContainer = styled.div`
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
    transition: 0.5s all;

    display: flex;
    justify-content: space-between;
    gap: 10px;
    @media (max-width: 600px) {
        display: flex;
        justify-content: space-between;
        gap: 10px;
    }
`;

export const Logo = styled.img`
    width: 25px;
    margin-left: 8px;
    @media (max-width: 600px) {
        width: 25px;
        margin-left: 8px;
    }
`;

export const DownArrow = styled.img`
    transition: 0.5s all;
    width: 25px;
    position: relative;
    bottom: 4px;
    right: 5px;

    @media (max-width: 600px) {
        width: 25px;
        position: relative;
        bottom: 4px;
        right: 5px;
    }
`;

export const PokeBall = styled.img`
    width: 120px;
    position: absolute;
    right: 10px;
    top: 10px;
    @media (max-width: 600px) {
        width: 120px;
        position: absolute;
        right: 10px;
        top: 10px;
    }
`;

//The grid creates equally sized rows. Used by the search bar, pokeball and the type-tags.
export const GridContainer = styled.div`
    display: grid;
    margin-top: 20px;
    padding: 0 20px 0 20px;
    grid-template-rows: repeat(1fr);
    row-gap: 20px;
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
    display: grid;
    width: 80%;
    height: 40px;
    grid-template-columns: 1fr 4fr 1fr;
    grid-column-gap: 0px;
    margin: auto;

    .searchbar {
        border-radius: 6px;
        outline: none;
        border: 1px solid grey;
        background-color: #f8f8f8;
        padding-left: 10px;
        font-size: 15px;
        width: 100%;
        display: grid;
        grid-template-columns: 4fr 1fr;
    }

    @media (max-width: 600px) {
        display: grid;
        width: 90%;
        height: 40px;
        grid-template-columns: 1fr 4fr 1fr;
        grid-column-gap: 25px;

        .searchContainer {
            display: inline-flex;
            flex: 1;
            border: 1px solid grey;
            background-color: #f8f8f8;
            border-radius: 6px;
            overflow: hidden;
        }

        .searchbar {
            outline: none;
            padding: 0.5rem 0.5rem 0.5rem 0;
            flex: 1;
            border: none;
            padding-left: 10px;
            font-size: 15px;
            width: 100%;
        }

        .searchIcon {
            padding: 0.7rem;
            /* display: flex; */
            /* align-items: center; */
            /* background-color: black;
            -webkit-mask-image: url(icon.svg);
            mask-image: url(icon.svg); */
        }
    }
`;

export const PokeBallBtnContainer = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    @media (max-width: 600px) {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: center;
    }
`;

export const PokeBallBtn = styled.img`
    width: 40px;
    @media (max-width: 600px) {
        width: 40px;
    }
`;

//Wrapper for the type-tags
export const TagOuter = styled.div`
    display: flex;
    height: 30px;
    gap: 20px;
    overflow-y: scroll;
    margin: auto;
    width: 40%;

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
    z-index: 999;
    width: 270px;

    &:hover {
        cursor: pointer;
    }

    @media (min-width: 600px) {
        width: 300px;
    }
`;

//Filter icon to the left of the text
export const FilterIcon = styled.div``;

//"Filter your pokemon"
export const FilterText = styled.div``;

//The dropdown appears when "Filter your pokemon" is clicked. The grid creates equally sized rows.
export const DropdownOuter = styled.div`
    transition: 0.5s all;

    position: relative;
    background-color: #bd1808;
    width: 100%;
    height: 500px;
    z-index: 999;
    margin-top: 15px;
    padding-top: 15px;
    text-align: center;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    display: grid;
    grid-template-rows: 3fr 3fr 1fr;
    grid-row-gap: 50px;
`;

//Wrapper for each row-section in the dropdown grid
export const DropdownGridRow = styled.div`
    width: 100%;
`;

//Header for "Types" and "Sort by"
export const DropdownHeader = styled.div`
    color: #ffffff;
    font-size: 1.2rem;
`;

//Box and grid for the types-section. Parent of the TagOuter containing the carousel.
export const TypesBox = styled.div`
    background-color: rgba(255, 255, 255, 0.2);
    display: grid;
    align-items: center;
    height: 100%;
    border-radius: 10px;
    width: 95%;
    margin: auto;
`;

//Box and grid for the sort-by-section
export const SortByBox = styled.div`
    height: 100%;
    background-color: rgba(255, 255, 255, 0.2);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(auto, auto));
    border-radius: 10px;
    width: 95%;
    align-items: center;
    margin: auto;
`;

//"Sort by"-tags such as "A - Z"
export const SortTag = styled.div`
    background-color: rgba(15, 10, 10, 0.5);
    color: #ffffff;
    border-radius: 10px;
    font-size: 1.2rem;
    width: 80%;
    height: 40px;
    display: grid;
    align-items: center;
    margin: auto;

    //Last tag takes up width of two columns
    &:nth-child(5) {
        border-spacing: 10px;
        grid-column: span 2;
        width: 90%;
    }

    font-size: 0.9rem;
    padding: 0 5px 0 5px;
    @media screen and (max-width: 320px) {
        font-size: 0.9rem;
        padding: 0 5px 0 5px;
    }
`;

export const ButtonsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 10px;
`;

export const ResetBtn = styled.div`
    background-color: rgba(15, 10, 10, 0.5);
    color: #ffffff;
    padding: 5px 0 5px 0;
    width: 35%;
    border-radius: 10px;
    font-size: 1.3rem;
    display: grid;
    align-items: center;

    font-size: 1rem;
    @media screen and (max-width: 320px) {
        font-size: 1rem;
    }
`;

export const SearchBtn = styled.div`
    background-color: rgba(15, 10, 10, 0.5);
    color: #ffffff;
    padding: 5px 0 5px 0;
    width: 55%;
    border-radius: 10px;
    font-size: 1.3rem;
    display: grid;
    align-items: center;

    font-size: 1rem;
    @media screen and (max-width: 320px) {
        font-size: 1rem;
    }
`;

export const PokemonContainer = styled.div`
    width: 25%;
    display: grid;
    position: fixed;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    height: 50px;
    right: 0px;
    overflow: hidden;
    top: 122px;
    column-gap: 0px;
    align-items: baseline;

    img {
        position: relative;
        bottom: 0px;
        width: 55px;
    }

    @media (max-width: 600px) {
        visibility: hidden;
    }
`;
