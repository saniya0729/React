import { useEffect, useState } from "react";

export const Cleanup = () => {
    const [count, setCount] = useState(0)

    useEffect(()=>{
       const timer=  setInterval(() => {
            setCount((prev)=> prev + 1)
        }, 1000);
      return()=> clearInterval(timer) 
    }, [])
  
  return (
    <>
      <div className="container">
        <div className="counter">
          <p>My Subscribers on Youtube</p>
          <h1 className="">{count}</h1>
          <h3>
            Subscribers <br /> Realtime Counter
          </h3>
        </div>
      </div>
    </>
  );
};
