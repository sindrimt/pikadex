import React, { useState, useEffect } from "react";
import bulb from "../../assets/testREMOVE/bulb.png";

import { CardContainer, InformationContainer, NameTag, PokeIndex, Tag, Tags } from "./CardStyles";

const Card = ({ index, img, name }: any) => {
    return (
        <>
            <CardContainer>
                <PokeIndex>#00{index}</PokeIndex>
                <InformationContainer>
                    {/* <PokeIndex>#001</PokeIndex> */}
                    <div>
                        <img src={img} alt="bubla" />
                    </div>
                    <div>some epic stats</div>
                </InformationContainer>
                <Tags>
                    <Tag>Water</Tag>
                    <Tag>Flame</Tag>
                </Tags>
                <NameTag>{name}</NameTag>
            </CardContainer>
        </>
    );
};

export default Card;
