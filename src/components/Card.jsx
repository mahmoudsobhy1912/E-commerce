import React from 'react';
import { Link } from "react-router-dom";
// import AddCart from "./AddCart";
const Card = (props) => {
    return (
        <div className="card">
            <Link to={`Home/${props.data.id}`}>
            <div className="photo"><img src={props.data.photo} alt=""></img></div>
<<<<<<< HEAD
            <Link to={`Home/${props.data.id}`}><h3>{props.data.name}</h3></Link>
            <h4>Price : {props.data.price}$</h4>
            <button>Add to Cart</button>
=======
            <p>{props.data.name}</p>
            <p>Price : {props.data.price}$</p>
            {/* <AddCart data={props.data}/> */}
            </Link>
>>>>>>> cd30d4f27b28096e808113c2df4a5400464be71c
        </div> 
    );
}

export default Card;