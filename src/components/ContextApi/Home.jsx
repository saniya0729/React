import { useContext } from "react";
import { BioContex } from ".";

export const Home = () => {
  const { myName, myAge } = useContext(BioContex);
  return (
    <>
      <h1>
        Hello Context Api : my name is {myName} and my age is : {myAge}
      </h1>
    </>
  );
};
