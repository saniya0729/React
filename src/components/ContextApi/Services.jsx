import { useContext } from "react";
import { BioContex } from ".";

export const Services = () => {
  const { myName, myAge } = useContext(BioContex);
  return (
    <>
      <h1>
        Hello Context Api Services : my name is {myName} and my age is : {myAge}
      </h1>
    </>
  );
};
