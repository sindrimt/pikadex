import React, { useState, useEffect } from "react";

import { CardContainer, InformationContainer, NameTag } from "./CardStyles";

const Card = () => {
    return (
        <>
            <CardContainer>
                <InformationContainer>Information about the pokemon</InformationContainer>
                <NameTag>Pikachu</NameTag>
            </CardContainer>
        </>
    );
};

export default Card;
