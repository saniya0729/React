import "./Ev.css";

export const EventHandling = () => {
  //   function handleButtonClick() {
  //     alert("Hey i am onclick Event");
  //   }
  const handleButtonClick = (event) => {
    console.log(event.target);
    alert("Hey i am onClick Event");
  };
  const handleWelcomeUser=(value)=>{
    console.log(`Hey ${value} welcome to my channel`);
    
  }
  return (
    <>
      {/* function component with name functions */}
      <button onClick={handleButtonClick}>click Me</button>
      {/* in arrow function () paranthethis  is imp otherwise it will not run*/}
      <button onClick={(event) => handleButtonClick(event)}>click Me 2</button>
      {/* inline Event handlers */}
      <button onClick={(event) => console.log(event)}>Inline Function</button>
      {/* function coponents with inline  arrow function */}
      <button onClick={() => alert("Hey i am inline event function")}>Inline Arr Function</button>

      {/* passing arguments to event handlers */}
      {/* <button onClick={handleWelcomeUser("saniya ")}>Click Me</button> */}
      <button onClick={()=>handleWelcomeUser("saniya")}>Click Me</button>
      <button onClick={()=>handleWelcomeUser("sani")}>Click Me</button>

    </>
  );
};
