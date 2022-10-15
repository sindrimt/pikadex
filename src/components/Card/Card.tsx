import React, { useState, useEffect } from "react";
import bulb from "../../assets/testREMOVE/bulb.png";

import { CardContainer, InformationContainer, NameTag, PokeIndex, Tag, Tags } from "./CardStyles";

const Card = () => {
    return (
        <>
            <CardContainer>
                <PokeIndex>#001</PokeIndex>
                <InformationContainer>
                    {/* <PokeIndex>#001</PokeIndex> */}
                    <div>
                        <img src={bulb} alt="bubla" />
                    </div>
                    <div>some epic stats</div>
                </InformationContainer>
                <Tags>
                    <Tag>Water</Tag>
                    <Tag>Flame</Tag>
                </Tags>
                <NameTag>Pikachu</NameTag>
            </CardContainer>
        </>
    );
};

export default Card;
