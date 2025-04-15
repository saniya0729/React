import { useEffect, useState } from "react";

export const FetchApi = () => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API = "https://pokeapi.co/api/v2/pokemon/pikachu";
  // const fetchPokemon = () => {
  //   fetch(API)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setApiData(data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setError(error)
  //       setLoading(false);
  //     });
  // };
  // useEffect(() => {
  //   fetchPokemon();
  // }, []);
  // console.log(apiData);
  // if (loading)
  //   return (
  //     <div className="container">
  //       <div className="header">
  //         <h1>Loading...</h1>
  //       </div>
  //     </div>
  //   );
  // if (error)
  //   return (
  //     <div className="container">
  //       <div className="header">
  //         <h1>Error: {error.message}</h1>
  //       </div>
  //     </div>
  //   );

  //   if(apiData){

  // Data fetching using asysn await
  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setApiData(data);
      setLoading(false);
    } catch(error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };
 useEffect(() => {
    fetchPokemon();
  }, []);
  if (loading)
    return (
      <div className="container">
        <div className="header">
          <h1>Loading...</h1>
        </div>
      </div>
    );
  if (error)
    return (
      <div className="container">
        <div className="header">
          <h1>Error: {error.message}</h1>
        </div>
      </div>
    );

  return (
    <>
      <div className="container">
        {/* <ul>
          data:
          {apiData.map((curData) => {
            return <li key={curData.id}>{curData.title}</li>;
          })}
        </ul> */}

        <header>
          <h1>Lets Catch Pokemon</h1>
          <ul>
            <li>
              <figure>
                <img
                  width="20%"
                  height="20%"
                  src={apiData.sprites.other.dream_world.front_default}
                  alt=""
                />
              </figure>
              <h1 className="text-center text-green-500">{apiData.name}</h1>
              <h1 className="text-center text-green-500">{apiData.weight}</h1>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
};
// }
