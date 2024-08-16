"use client";

import { Suspense } from "react";
import FruitsComponentClient from "../FruitsComponentClient";



const Page = ({ searchParams }) => {

  return <div>
    <h1>Fruits</h1>
    <Suspense fallback={<h1>Loading...</h1>}>
      <FruitsComponentClient timeout={searchParams.t}/>
    </Suspense>
  </div>;
};

export default Page;
