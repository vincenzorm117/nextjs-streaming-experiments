import Comp1 from "./comp1";

const Page = ({ searchParams }) => {
  const ctx = {};

  return (
    <div>
      <h1>Fruits</h1>
      <Comp1 ctx={ctx} />
    </div>
  );
};

export default Page;
