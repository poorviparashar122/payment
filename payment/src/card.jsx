import React from "react";
import './card.css';

function Card(props) {
  
    return(
        <div className="cardmain">
          <div className="card">
              <p>{props.h1}</p>
              <button className="c1">{props.h2}</button>
              <h1>{props.h3}</h1>
              <h1>{props.h4}</h1>
              <h5>{props.h5}</h5>
          </div>
          <div>
              <img className="img"src={props.h6}></img>
              <img  className="img1" src={props.h7}></img>
          </div>
        </div>
    )
}

export default Card