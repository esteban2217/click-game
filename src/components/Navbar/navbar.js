import React from "react";
import "./Navbar.css";

const Navbar = props => {

	return (
		<nav className="navbar fixed-top navbar-dark bg-danger">
			<a className="navbar-brand ml-4 pl-4" href="/"><h2>Clicky Game</h2></a>
		    <h2>{props.message}</h2>
		    <h2 className="mr-4 pr-4">Score: {props.curScore} | Top Score: {props.topScore}</h2>
		</nav>
		);
};

export default Navbar;

