
const Comp3 = ({ ctx }) => {
  return (
    <div>
      <ul>
        {ctx.fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default Comp3;