import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ApolloClient, InMemoryCache, ApolloProvider, gql } from "@apollo/client";
//Apollo docs: https://www.apollographql.com/docs/react/get-started/

//Connect apollo to our server uri
const client = new ApolloClient({
    uri: "http://it2810-40.idi.ntnu.no:7474/",
    cache: new InMemoryCache(),
});

//Vi kan bruke noe lignende til å hente ut favorittene som er lagret i databasen vår.
/* client
  .query({
    query: gql`
      query GetFavorites {
        pokemon {
          id
          name
          description
          photo
        }
      }
    `,
  })
  .then((result) => console.log(result)); */

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </React.StrictMode>
);
