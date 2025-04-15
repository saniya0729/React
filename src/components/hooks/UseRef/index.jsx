import { useRef } from "react";

export const UseRef = () => {
  const username = useRef(null);
  const password = useRef(null);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value)
    console.log(password.current.value)
  };

  return (
    <div className="bg-black">
      <h1>Hello UseRef</h1>
      <input type="text" id="username" ref={username}/>
      <input type="text" id="password" ref={password}/>
      <button onClick={handleFormSubmit}>Submit</button>
    </div>
  );
};
