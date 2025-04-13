import styles from "./Netflix.module.css";
<<<<<<< HEAD
import styled from "styled-components";

// Destructuring in jsx
export const SeriesCard = ({ data }) => {
  const { img_url, name, rating, description, cast, Watch_url } = data;
=======

// Destructuring in jsx
export const SeriesCard = ({ data }) => {
  const { img_url, name, rating, description, genre, cast, Watch_url } = data;
>>>>>>> d48129672e54e9c2a1c219d1092e2893cf661fb2
  // inline css
  const btn_style = {
    padding: "1.2rem 2.4rem",
    border: "none",
    fontSize: "1.6rem",
<<<<<<< HEAD
    backgroundColor: `${rating >= 8.5 ? "rgb(7, 216, 129)" : "rgb(233, 218, 7)"
      }`,
=======
    backgroundColor: `${
      rating >= 8.5 ? "rgb(7, 216, 129)" : "rgb(233, 218, 7)"
    }`,
>>>>>>> d48129672e54e9c2a1c219d1092e2893cf661fb2
    color: "var(--heading-color: #000a19;)",
  };
  const rating_style = {
    fontSize: "1.5rem",
  };
<<<<<<< HEAD
  // styled component and object
  // const NameStyle= styled.h2({
  //   color:"red"
  // })

  // pure css in template literal
  const NameStyle = styled.h2`
  color:red;`
=======
>>>>>>> d48129672e54e9c2a1c219d1092e2893cf661fb2
  // const ratingClass = rating >= 8.5 ? "super_hit": "average";
  const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;
  return (
    <li className={styles.card}>
      <div>
        <img src={img_url} alt="" />
      </div>
      <i class="fa fa-user-circle-o" aria-hidden="true"></i>
      <div className={styles["card-content"]}>
<<<<<<< HEAD
        <NameStyle>Name: {name}</NameStyle>
=======
        <h2>Name: {name}</h2>
>>>>>>> d48129672e54e9c2a1c219d1092e2893cf661fb2
        {
          <h5>
            Ratings:{" "}
            <span className={`${styles.rating} ${ratingClass}`}>{rating}</span>
          </h5>
          // { <h5>Ratings: <span className= {`rating ${rating >= 8.5 ? "super_hit": "average"}`}>{rating}</span></h5>
        }{" "}
        {/* inline css */}
<<<<<<< HEAD
        <p style={{ margin: "1.2red 0" }} className="text-3xl font-bold underline text-purple-500">Summary: {description}</p>
=======
        <p style={{ margin: "1.2red 0" }}>Summary: {description}</p>
>>>>>>> d48129672e54e9c2a1c219d1092e2893cf661fb2
        <p>Cast: {cast}</p>
        <a href={Watch_url} target="_black">
          <button style={btn_style}>Watch Now</button>
          {/* <button style={{
                        padding: "1.2rem 2.4rem",
                        border: "none",
                        fontSize: "1.6rem",
                        backgroundColor: "var(--btn-hover-bg-color)",
                        color: "var(--bg-color)"
                    }}>Watch Now</button> */}
        </a>
      </div>
    </li>
  );
};
// export const SeriesCard = (props) => {
//     // const {data}= props;

//     return (
//         <li>
//             <div>
//                 <img src={data.img_url} alt="" width="40%" height="40%" />
//             </div>
//             <h2>Name: {data.name}</h2>
//             <h3>Ratings: {data.rating}</h3>
//             <p>Summary: {data.description}</p>
//             <p>Genre: {data.genre}</p>
//             <p>Cast: {data.cast}</p>
//             <a href={data.Watch_url} target="_black">
//                 <button>Watch Now</button>
//             </a>
//         </li>
//     );
// }

// export const SeriesCard = (props) => {
//     return (
//         <li>
//             <div>
//                 <img src={props.curElem.img_url} alt="" width="40%" height="40%" />
//             </div>
//             <h2>Name: {props.curElem.name}</h2>
//             <h3>Ratings: {props.curElem.rating}</h3>
//             <p>Summary: {props.curElem.description}</p>
//             <p>Genre: {props.curElem.genre}</p>
//             <p>Cast: {props.curElem.cast}</p>
//             <a href={props.curElem.Watch_url} target="_black">
//                 <button>Watch Now</button>
//             </a>
//         </li>
//     );
// }
