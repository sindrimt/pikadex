import styled from "styled-components";

export const CardContainer = styled.div`
    width: 80%;
    height: 200px;
    background-color: lightblue;
    border-radius: 8px;

    display: grid;
    grid-template-rows: 3fr 1fr;
`;

export const InformationContainer = styled.div`
    width: 100%;
    background-color: rgba(144, 238, 144, 0.2);
`;

export const NameTag = styled.div`
    width: 100%;
    background-color: rgb(144, 238, 144);
    display: flex;
    align-items: center;
    justify-content: center;
`;
