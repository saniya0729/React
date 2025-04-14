import { useEffect, useState } from "react";


// export const ReactUseEffect = () => {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     console.log("count value:", count);
//   }, [count]);

//   return (
//     <>
//       <h1>Hello, UseEffect</h1>
//       <p>Count : {count}</p>
//       <button onClick={() => setCount(count + 1)}>increament</button>
//     </>
//   );
// };

 export const ReactUseEffect=()=>{
  const [date, setDate]=useState(0)
  useEffect(()=>{
    setInterval(() => {
      const updatedDate = new Date()
      setDate(updatedDate.toLocaleTimeString())
      
    }, 1000);
  },[])
  return(
    <div>
      <h1>Date : {date}</h1>
    </div>
  )
 }