import styled from "styled-components";

interface TagIconI {
    background: string;
}

export const CardContainer = styled.div`
    width: 80%;
    height: 190px;
    border-radius: 8px 8px 0 0;
    display: grid;
    grid-template-rows: 1fr 3fr 1fr 1fr;
    border: 1px solid #74cb48;
`;

export const InformationContainer = styled.div`
    display: grid;
    padding: 10px;
    border-radius: 8px 8px 0 0;
    grid-template-columns: 2fr 3fr;
    column-gap: 10px;
`;

export const TagIcon = styled.div<TagIconI>`
    width: 40px;
    height: 20px;
    background-color: ${(props) => props.background};
`;

export const PokeIndex = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    transform: translate(-8px, 3px);
    font-size: 18px;
    color: #74cb48;
`;

export const NameTag = styled.div`
    width: 100%;
    color: white;
    font-size: 22px;
    font-weight: 400;
    height: 100%;
    background-color: #74cb48;
    display: flex;
    align-items: center;
    border-radius: 0 0 8px 8px;
    border: 1px solid #74cb48;
    transform: translateX(-1px);
    justify-content: center;
`;

export const Tags = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    gap: 30px;
    position: relative;
    bottom: 7px;
`;

export const Tag = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 20px;
    background-color: lightblue;
    font-size: 14px;
    border-radius: 15px;
    gap: 20px;
    padding: 3px;
    color: white;
    font-weight: 500;
    font-size: 13px;
`;
