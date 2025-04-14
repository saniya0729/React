import { useEffect, useState } from "react";

export const UseEffectChallenge = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("sani")

   useEffect(()=>{
    document.title = `count: ${count}`
   },[count])

    useEffect(()=>{
        console.log(name)
    },[name])
  return (
    <div className="container effect-container">
      <h1>useEffect Challenge</h1>
      <p>count: {count} </p>
      <button onClick={()=> setCount(count+1)}>Increment</button>
      <p>
        Name: <span>{name}</span>
      </p>
      <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
    </div>
  );
};
