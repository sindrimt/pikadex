import React from "react";
// import logo from './pokeball.png';
import Homepage from "./pages/MainPage/Homepage";
import { useQuery, gql } from "@apollo/client";
//Apolo docs: https://www.apollographql.com/docs/react/get-started/

//This is just dummy code, and has not been implemented yet. Used to retrieve favorites from DB.
const GET_FAVORITES = gql`
    query GetFavorites {
        pokemon {
            id
            name
            description
            photo
        }
    }
`;

/* function displayFavorites() {
    const { loading, error, data } = useQuery(GET_FAVORITES);
    //Her kan vi mappe dataen i favorites og vise dem i kortene
    //Dummy kode som vi kan bruke senere
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.pokemon.map(({ id, name, description, photo }) => (
        <div key={id}>
            <h3>{name}</h3>
            <img width="400" height="250" alt="location-reference" src={`${photo}`} />
            <br />
            <b>About this location:</b>
            <p>{description}</p>
            <br />
        </div>
    ));
} */

function App() {
    return <Homepage />;
}

export default App;
