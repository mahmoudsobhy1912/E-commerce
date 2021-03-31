import React from 'react';
import { Link } from "react-router-dom";

const Card = (props) => {
    return (
        <div className="card">
            <div className="photo"><img src={props.data.photo} alt=""></img></div>
            <Link to={`Home/${props.data.id}`}><h3>{props.data.name}</h3></Link>
            <h4>Price : {props.data.price}$</h4>
            <button>Add to Cart</button>
        </div> 
    );
}

export default Card;