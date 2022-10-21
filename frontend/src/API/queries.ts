import { ApolloClient, InMemoryCache, ApolloProvider, gql } from "@apollo/client";

export const getPokemonData = () => {
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
};
