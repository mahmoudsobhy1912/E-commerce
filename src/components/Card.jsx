import React from 'react';
import { Link } from "react-router-dom";
// import AddCart from "./AddCart";
const Card = (props) => {
    return (
        <div className="card">
            <Link to={`Home/${props.data.id}`}>
            <div className="photo"><img src={props.data.photo} alt=""></img></div>
            <p>{props.data.name}</p>
            <p>Price : {props.data.price}$</p>
            {/* <AddCart data={props.data}/> */}
            </Link>
        </div> 
    );
}

export default Card;