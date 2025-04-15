import { useReducer } from "react";

export const UseReducer = () => {
  const initialState = {
    count: 0,
    inc: 2,
    dec: 2,
  };
  const reducer = (state, action) => {
    console.log(state,action);
    
    switch (action.type) {
      case "INCREMENT":
        return { ...state, count: state.count + 1 };
        break;
      case "DECREMENT":
        return { count: state.count - 1 };
        break;
      case "RESET":
        return { count: 0 };
        break;

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="container">
      <h1>Hello UseReducer Hook!</h1>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

// import { useReducer } from "react";

// export const UseReducer = () => {
//   //  const[count, setCount]=useState(0)
//   //   console.log(useReducer(0, 0));

//   const reducer = (state, action) => {
//     if (action.type === "INCREMENT") {
//       return state + 1;
//     }
//     if (action.type === "DECREMENT") {
//       return state - 1;
//     }
//     if (action.type === "RESET") {
//       return (state = 0);
//     }
//   };
//     const [count, dispatch] = useReducer(reducer, 0);
//   return (
//     <div className="container">
//       <h1>Hello UseReducer Hook!</h1>
//       <h1>{count}</h1>
//       <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
//       <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
//       <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
//     </div>
//   );
// };
