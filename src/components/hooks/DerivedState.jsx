import { useState } from "react"

// const users = [
//     { name: "saniya", age: 25 },
//     { name: "shadab", age: 24 },
//     { name: "Shoeb", age: 22 },
//     { name: "Mussu", age: 15 },
// ]

// we can also print the data using state

export const DerivedState = () => {
    const [users, setUsers] = useState([
        { name: "saniya", age: 25 },
        { name: "shadab", age: 24 },
        { name: "Shoeb", age: 22 },
        { name: "Mussu", age: 15 },
    ])
    return (
        <div className="main-div">
            <h1>users list </h1>
            <ul>
                {users.map((curElem, index) => {
                    return (
                        <>
                            <li key={index}>
                                {curElem.name} - {curElem.age} year old
                            </li>
                        </>
                    )
                })}
            </ul>
        </div>
    )
}