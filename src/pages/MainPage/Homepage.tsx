import Navbar from "../../components/Navbar/Navbar";
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
            <FooterEdge src={footerEdge} />
        </>
    );
}

const LeftEdge = styled.img`
    position: absolute;
    left: -1px;
    top: 24%;
`;

const RightEdge = styled.img`
    position: absolute;
    right: 0px;
    top: 24%;
`;

const FooterEdge = styled.img`
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 0%);
`;

export default MainPage;
