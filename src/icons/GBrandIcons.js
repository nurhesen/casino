import React from "react";
import { Image } from "@chakra-ui/react";

const GBrand = ({ style, name }) => {
  const nameDict = {
    all: "/images/all.png",
    bomba: "/images/bomba.png",
    amatic: "/images/amatic.png",
    netent: "/images/netent.png",
    novomatic: "/images/novomatic.png",
    egt: "/images/egt.png",
    wazdan: "/images/wazdan.png",
  };
  const src = nameDict[name];
  return <Image src={src} {...style} />;
};

export { GBrand };
