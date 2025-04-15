import { createContext } from "react";

export const BioContex = createContext();

export const BioProvider = ({children}) => {
  const myName = "saniya";
  const myAge = 19;
  return (
    <>
      <BioContex.Provider value={{myName, myAge}}>{children}</BioContex.Provider>
    </>
  );
};
