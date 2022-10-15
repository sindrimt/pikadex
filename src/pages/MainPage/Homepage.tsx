import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";

// import SearchBox from "../../components/SearchBox/SearchBox";
import leftEdge from "../../assets/pageEdges/leftEdge.svg";
import rightEdge from "../../assets/pageEdges/rightEdge.svg";
import footerEdge from "../../assets/pageEdges/footerEdge.svg";

import styled from "styled-components";

function MainPage() {
    return (
        <>
            <Navbar />
            <LeftEdge src={leftEdge} />
            <RightEdge src={rightEdge} />
            <CardGrid>
                <Card />
                <Card />
                <Card />
                <Card />
                <FooterEdge src={footerEdge} />
            </CardGrid>
        </>
    );
}

//Grid for the pokemon cards
const CardGrid = styled.div`
    position: absolute;
    z-index: -1;
    top: 172px;
    width: 100%;
    height: fit-content;
    display: grid;
    grid-template-rows: repeat(1fr);
    margin-top: 30px;
    grid-row-gap: 40px;
    justify-items: center;
`;

const LeftEdge = styled.img`
    position: fixed;
    transform: translateX(-1px);
    top: 200px;
    height: 70vh;

    @media (max-height: 680px) {
        height: 64vh;
    }

    @media (max-height: 550px) {
        height: 55vh;
    }

    @media (max-height: 450px) {
        height: 45vh;
    }

    @media (max-height: 400px) {
        height: 40vh;
    }
`;

const RightEdge = styled.img`
    position: fixed;
    right: 0px;
    transform: translateX(0px);
    top: 200px;
    height: 70%;

    @media (max-height: 680px) {
        height: 64vh;
    }

    @media (max-height: 550px) {
        height: 55vh;
    }

    @media (max-height: 450px) {
        height: 45vh;
    }

    @media (max-height: 400px) {
        height: 40vh;
    }
`;

const FooterEdge = styled.img`
    position: absolute;
    bottom: -1px;
    left: 50%;
    transform: translate(-50%, 0%);
`;

export default MainPage;
