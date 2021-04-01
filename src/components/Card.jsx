import React from 'react';
// import AddtocartBt from "./AddtocartBt";
import AddtocartBt from "./AddtocartBt";
import { Link } from "react-router-dom";

const Card = (props) => {
    return (
        <div className="card">
            <Link to={`Home/${props.data.id}`}>
                <div className="photo"><img src={props.data.photo} alt=""></img></div>
                <p>{props.data.name}</p>
                <p>Price : {props.data.price}$</p>
            </Link>
            <AddtocartBt data={props.data}/>
        </div> 
    );
}

export default Card;