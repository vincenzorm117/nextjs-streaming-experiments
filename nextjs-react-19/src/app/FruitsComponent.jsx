import { Suspense } from "react";

const getFruits = () => {
  const fruits = fetch('http://fruits.example.com/timeout?t=5', {
    cache: 'no-cache',
  }).then(res => res.json())  
  return fruits
}

const FruitsComponent = async () => {
    const fruits = await getFruits()
    console.log(fruits)

    return <div>
    <Suspense fallback={<h1>Loading...</h1>}>
      <ul>
        {fruits.map(fruit => <li key={fruit}>{fruit}</li>)}
      </ul>
    </Suspense>
  </div>
}

export default FruitsComponent;