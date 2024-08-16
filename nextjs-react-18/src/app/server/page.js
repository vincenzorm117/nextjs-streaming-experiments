import { Suspense } from "react";
import FruitsComponentServer from "../FruitsComponentServer";



const Page = ({ searchParams }) => {

  return <div>
    <h1>Fruits</h1>
    <Suspense fallback={<h1>Loading...</h1>}>
      <FruitsComponentServer timeout={searchParams.t}/>
    </Suspense>
  </div>;
};

export default Page;
