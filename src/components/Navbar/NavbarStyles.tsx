import styled from "styled-components";

// Media queries https://www.w3schools.com/css/css_rwd_mediaqueries.asp

export const NavbarOuter = styled.div`
    @media (max-width: 600px) {
        position: absolute;
        height: 172px;
        width: 100%;
        background-color: #bd1808;
    }
`;

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

export const GridContainer = styled.div`
    @media (max-width: 600px) {
        display: grid;
        margin-top: 20px;
        padding: 0 20px 0 20px;
        grid-template-rows: repeat(1fr);
        row-gap: 20px;
    }
`;

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

export const TagOuter = styled.div`
    display: flex;
    height: 30px;
    gap: 20px;
`;

export const Tag = styled.div`
    background-color: #74cb48;
    color: #ffffff;
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 10px;
    //flex-grow: 1;
`;
