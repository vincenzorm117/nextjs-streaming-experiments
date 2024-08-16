import {use } from 'react';

const getFruits = (timeout) => {
  return fetch(`http://fruits.example.com/?t=${timeout}`, {
    // cache: "no-cache"
  }).then((res) => res.json());
};

const FruitsComponentClient = ({ timeout }) => {
  const fruits = use(getFruits(timeout));

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

export default FruitsComponentClient;
