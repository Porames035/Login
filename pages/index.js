import { useEffect, useState } from 'react'


export default function Home() {

  const [count, setCount] = useState(0)

  function testEffect(){
    console.log('Effect');
  }

  useEffect(testEffect, [count])

  function click(){
    setCount(count + 1)
  }

  const test = (
    <div>
      <h1>Hello !! {count} </h1>
      <button onClick={ click }>Click</button>
    </div>
  )
  return test

}
