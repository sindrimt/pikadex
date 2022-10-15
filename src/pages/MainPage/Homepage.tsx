import React, { useState, useEffect } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";

// import SearchBox from "../../components/SearchBox/SearchBox";
import leftEdge from "../../assets/pageEdges/leftEdge.svg";
import rightEdge from "../../assets/pageEdges/rightEdge.svg";
import footerEdge from "../../assets/pageEdges/footerEdge.svg";

import styled from "styled-components";
import { useScroll } from "../../hooks/useScroll";

import { useQuery, gql, ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://beta.pokeapi.co/graphql/v1beta",
    cache: new InMemoryCache(),
});

const GET_POKEMON_LIST = gql`
    {
        pokemon_v2_pokemonsprites(limit: 10) {
            pokemon_id
            pokemon_v2_pokemon {
                id
                name
            }
            sprites
        }
    }
`;

const MainPage = () => {
    const scroll = useScroll();

    let lineHeight: string = "70vh";
    let lineTop: string = "200px";
    let lineOffset: string = "0px";

    const [pokemonData, setPokemonData] = useState<any>([]);

    useEffect(() => {
        client.query({ query: GET_POKEMON_LIST }).then((response) => {
            console.log(response);
            setPokemonData(response);
        });
    }, []);

    // If the user has scrolled over 80 px, increase the line heights
    if (scroll > 5) {
        lineHeight = "80vh";
        lineTop = "120px";
        lineOffset = "7px";
    }

    return (
        <>
            <Navbar />
            <LeftEdge src={leftEdge} height={lineHeight} top={lineTop} offset={lineOffset} />
            <RightEdge src={rightEdge} height={lineHeight} top={lineTop} offset={lineOffset} />
            <CardGrid>
                {pokemonData?.data?.pokemon_v2_pokemonsprites?.map((pokemon: any, index: number) => {
                    return (
                        <Card
                            key={index}
                            img={JSON.parse(pokemon.sprites).front_default}
                            index={pokemon.pokemon_id}
                            name={pokemon.pokemon_v2_pokemon.name}
                        />
                    );
                })}
                <FooterEdge src={footerEdge} />
            </CardGrid>
        </>
    );
};
// interfaces for side lines
interface LeftEdgeI {
    height: string;
    top: string;
    offset: string;
}

interface RightEdgeI {
    height: string;
    top: string;
    offset: string;
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
    grid-row-gap: 50px;
    justify-items: center;
`;

const LeftEdge = styled.img<LeftEdgeI>`
    transition: 0.2s all;
    position: fixed;
    left: ${(props) => "-" + props.offset};
    top: ${(props) => props.top};
    height: ${(props) => props.height};

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

const RightEdge = styled.img<RightEdgeI>`
    transition: 0.2s all;
    position: fixed;
    right: ${(props) => "-" + props.offset};
    transform: translateX(0px);
    top: ${(props) => props.top};
    height: ${(props) => props.height};

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
