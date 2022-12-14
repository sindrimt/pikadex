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
        position: absolute;

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

//Wraps the content inside the navbar. Scroll on vertical overflow. Dynamic heighs.
export const OverflowWrapper = styled.div`
    position: relative;
    width: 100%;
    min-height: 75vh;
    max-height: 85vh;
    overflow-y: scroll;

    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */

    ::-webkit-scrollbar {
        display: none; /* for Chrome, Safari, and Opera */
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

//The grid creates equally sized rows. Used by the search bar, pokeball, types-box, sort-by-box, and the
//buttons at the bottom of the navbar.
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
    width: 65%;
    height: 40px;
    grid-template-columns: 1fr 4fr 2.5fr;
    grid-column-gap: 0px;
    margin: auto;
    @media (max-width: 950px) {
        grid-template-columns: 1fr 4fr 1fr;
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

    .searchContainer {
        display: inline-flex;
        flex: 1;
        border: 1px solid grey;
        background-color: #f4f4f4;
        border-radius: 6px;
        overflow: hidden;
    }

    .searchIcon {
        padding: 0.45rem;
        background-color: #f8f8f8;

        &:hover {
            cursor: pointer;
        }
        /* display: flex; */
        /* align-items: center; */
        /* background-color: black;
            -webkit-mask-image: url(icon.svg);
            mask-image: url(icon.svg); */
    }
    @media (max-width: 600px) {
        display: grid;
        width: 90%;
        height: 40px;
        grid-template-columns: 4fr 1fr;
        grid-column-gap: 5px;

        .filler {
            display: none;
        }

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
            padding: 0.45rem;
            background-color: #f8f8f8;
            /* display: flex; */
            /* align-items: center; */
            /* background-color: black;
            -webkit-mask-image: url(icon.svg);
            mask-image: url(icon.svg); */
        }
    }
    @media (min-width: 900px) {
        width: 55%;
    }
    @media (min-width: 1200px) {
        width: 45%;
    }
    @media (min-width: 1600px) {
        width: 55%;
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

export const PokeballBoxSupriseMe = styled.div`
    color: white;
    border-radius: 6px;
    background-color: rgba(255, 255, 255, 0.2);
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    &:hover {
        cursor: pointer;
    }
    @media (max-width: 950px) {
        background-color: transparent;
    }
`;

export const PokeballBoxSupriseMeText = styled.div`
    @media (max-width: 950px) {
        display: none;
    }
`;

export const PokeBallBtn = styled.img`
    width: 40px;
    @media (max-width: 600px) {
        width: 40px;
    }
    &:hover {
        cursor: pointer;
    }
`;

//Wrapper for the type-tags. Used for the carousel.
export const SelectedTags = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 20%;
    margin: auto;
`;

//Wrapper for the type-tags. Used for the carousel.
export const TagGrid = styled.div`
    display: grid;
    height: 85%;
    margin: auto;
    grid-column-gap: 15px;
    grid-row-gap: 15px;

    //Carousel for the tags
    overflow-y: scroll;
    width: 90%;

    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none; /* for Chrome, Safari, and Opera */
    }

    @media (max-width: 600px) {
        grid-template-columns: repeat(6, auto);
    }

    @media (min-width: 600px) {
        grid-template-columns: repeat(6, auto);
    }
    @media (min-width: 1050px) {
        resize: none;
    }
`;

//Type tag such as Water, Bug, Fire, etc.
export const Tag = styled.div`
    color: #ffffff;
    padding: 2px 10px 2px 10px;
    font-weight: 600;
    letter-spacing: 1px;
    text-shadow: -1px -1px 0 #000000, 1px -1px 0 #000000, -1px 1px 0 #000000, 1px 1px 0 #000000;
    display: flex; //Center text within tag
    align-items: center;
    justify-content: space-evenly;
    border-radius: 10px;
    &:hover {
        cursor: pointer;
    }
`;
//The bottom edge of the navbar
export const FilterOuter = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

//Filter icon to the left of the text
export const FilterIcon = styled.div``;

//"Filter your pokemon"
export const FilterText = styled.div``;

//Adjust width based on screen size
export const DropdownContainer = styled.div`
    @media (min-width: 600px) {
        width: 90%;
        margin: auto;
    }
    @media (min-width: 1050px) {
        width: 80%;
        margin: auto;
    }
    @media (min-width: 1500px) {
        width: 70%;
        margin: auto;
    }
    @media (min-width: 1900px) {
        width: 60%;
        margin: auto;
    }
`;

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
    grid-row-gap: 50px;

    @media (max-width: 600px) {
        grid-template-rows: 3fr 3fr 1fr;
    }

    @media (min-width: 600px) {
        grid-template-columns: 2fr 1fr;
        height: 300px;
    }
`;

//Wrapper for each row-section in the dropdown grid
export const DropdownGridRow = styled.div`
    width: 100%;

    //The buttons at the bottom of the navbar takes up two colunmns
    @media (min-width: 600px) {
        &:nth-child(3) {
            grid-column: span 2;
            width: 90%;
            display: flex;
            align-items: center;
            margin: auto;
        }
    }
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
    z-index: 999999;
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
    z-index: 99999999999;
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
    position: absolute;
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

export const NavbarEdge = styled.img`
    position: absolute;
    bottom: -22px;
    z-index: 999;
    width: 270px;

    &:hover {
        cursor: pointer;
    }

    @media (min-width: 600px) {
        width: 300px;
    }
`;
