const getFruits = (timeout) => {
  return fetch(`http://localhost/?t=${timeout}`, {
    // cache: "no-cache"
  }).then((res) => res.json());
};

const FruitsComponentServer = async ({ timeout }) => {
  const fruits = await getFruits(timeout);

  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default FruitsComponentServer;
