"use client";

import { useEffect, useState } from "react";
import Comp2 from "./comp2";
import Comp3 from "./comp3";

const getFruits = (timeout) => {
  return fetch(`http://localhost/?t=${timeout}`, {
    // cache: "no-cache"
  }).then((res) => res.json());
};

const Comp1 = ({ ctx, timeout=1 }) => {
  const [fruits, setFruits] = useState([]);
  
  useEffect(() => {
    getFruits(timeout).then((newFruits) => {
      setFruits(newFruits);
    });
  }, []);

  return (
    <>
    <Comp2 fruits={fruits} ctx={{...ctx, fruits}}/>
    <Comp3 ctx={{...ctx, fruits}}/>
    </>
  )
};

export default Comp1;
