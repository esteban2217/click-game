import React from "react";
import "./Card.css";

const Card = props => (

<div className="card">
{//call the sekectCard function once the player clickes on this img-container
}
	<div onClick={ () => { props.selectCard(props.id);	}} 
		className="img-container">
	<img alt={props.name} src={props.image} className="select_card img-fluid" />
	
	</div>
</div>

);

export default Card; 