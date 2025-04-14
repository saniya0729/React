import { useState } from "react"

export const FetchApi=()=>{
    const [apiData, setApiData]= useState([])

    fetch("https://jsonplaceholder/")
    .then((res)=> res.json())
    .then((data)=>{setApiData(data)})
    .catch((error)=> console.log(error))
    return (
        <>
        <div className="container">
            <ul>data:
               {apiData.map((curData)=>{
                return (
                    <li key={curData.id}>{curData.name}</li>
                )
               })}
            </ul>
        </div>
        </>
    )
}