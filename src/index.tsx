import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ApolloClient, InMemoryCache, ApolloProvider, gql } from "@apollo/client";
//Apollo docs: https://www.apollographql.com/docs/react/get-started/

//Connect apollo to our server uri
/* const client = new ApolloClient({
    uri: "http://it2810-40.idi.ntnu.no:7474/",
    cache: new InMemoryCache(),
}); */

//Connect apollo to the pokeapi endpoint
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
        }
    }
`;

client.query({ query: GET_POKEMON_LIST }).then(console.log);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </React.StrictMode>
);
