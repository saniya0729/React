import { useState } from "react";

export const State = () => {

    const [count, setCount] = useState(0);
    const handleButtonclick = () => {
        setCount(()=> count + 1)
    }
    console.log(useState())


    //   let value = 0;
    //   const handleButtonclick = () => {
    //     value++;
    //     console.log(value);
    //   };


    return (
        <section className="main-div">
            <h1>{count}</h1>
            <button onClick={handleButtonclick}>Increament</button>
        </section>
    );
};

