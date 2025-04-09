import seriesData from "../api/seriesData.json"
const NetflixSeries=()=>{
    return(
       <ul>
        { 
            seriesData.map((curElem)=>{
              return(  
              <li>
                    <div>
             <img src={curElem.img_url} alt="" width="40%" height="40%"/>
         </div>
         <h2>Name: {curElem.name}</h2>
         <h3>Ratings: {curElem.rating}</h3>
         <p>Summary: {curElem.description}</p>
        <p>Genre: {curElem.genre}</p>
         <p>Cast: {curElem.cast }</p>
         <a href={curElem.Watch_url} target="_black">
            <button>Watch Now</button>
        </a>
                </li>
            )
            })
        }
       </ul>
    )
}
export default NetflixSeries;


// import seriesData from "../api/seriesData.json"
// const NetflixSeries=()=>{
//     return(
//         <>
//         <div>
//             <img src={seriesData[0].img_url} alt="" width="40%" height="40%"/>
//         </div>
//         <h2>Name: {seriesData[0].name}</h2>
//         <h3>Ratings: {seriesData[0].rating}</h3>
//         <p>Summary: {seriesData[0].description}</p>
//         <p>Genre: {seriesData[0].genre}</p>
//         <p>Cast: {seriesData[0].cast }</p>
//         <a href={seriesData[0].Watch_url} target="_black">
//             <button>Watch Now</button>
//         </a>
//         </>
//     )
// }
// export default NetflixSeries;


// const NetflixSeries = () => {
//     const name = "My Demon";
//     const rating = 9.8;
//     const summary = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti obcaecati natus architecto beatae accusamus alias consequuntur facere deserunt debitis corrupti.";
//     const returnGenere = () => {
//       const genre = "RomCom";
//       return genre;
//     }
//     // conditional randoring
//     let age = 18;
//     // let canWatch = "Not Available";
//     // if(age>=18) canWatch="Watch Now"
    
//     const canWatch=()=>{
//     if(age>=18) return "Watch Now";
//     return "Not Available"
//   }
  
//     // if (age < 18) {
//     //   return (
//     //     <div>
//     //       <div>
//     //         <img src="https://i0.wp.com/www.poptokki.com/wp-content/uploads/2024/01/GEFhLwxbkAAVXd3.jpg?resize=1024%2C1024&ssl=1" width="40%" height="40%" alt="" />
  
//     //       </div>
//     //       <h2>Name : {name}</h2>
//     //       <h3>Rating: {5 + 4.8}</h3>
//     //       <p>Summary: {summary}</p>
//     //       <p>Genre: {returnGenere()}</p>
//     //       <button>Not Available</button>
//     //     </div>
//     //   )
//     // }
    
     
//       return (
//         <div>
//           <div>
//             <img src="https://i0.wp.com/www.poptokki.com/wp-content/uploads/2024/01/GEFhLwxbkAAVXd3.jpg?resize=1024%2C1024&ssl=1" width="40%" height="40%" alt="" />
    
//           </div>
//           <h2>Name : {name}</h2>
//           <h3>Rating: {5 + 4.8}</h3>
//           <p>Summary: {summary}</p>
//           <p>Genre: {returnGenere()}</p>
//           {/* <button>{age >= 18 ? "Watch Now": "Not Available"}</button> */}
//           {/* <button>{canWatch}</button> */}
//           <button>{canWatch()}</button>
//         </div>
//       )
//   }
//   export default NetflixSeries;

//   export const Header =()=>{
//     return <h1>saniya khan</h1>
//   }

//   export const Footer =()=>{
//     return <p>Copyright @thapatechnical</p>
//   }

