import React from 'react';

const Card = (props) => {
    return (
        <div className="card">
            <div className="photo"><img src={props.data.photo} alt=""></img></div>
            <h3>{props.data.name}</h3>
            <h4>Price : {props.data.price}$</h4>
            <p>Available : {props.data.quantity - props.data.sold} Piece</p>
            <p>Shop : {props.data.seller}</p>
            <p>Date : {props.data.added}</p>
        </div>
      );
}
 
export default Card;