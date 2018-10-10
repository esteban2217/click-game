import React, { Component } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import card from "./card.json";
import "./App.css";

class App extends Component {

	//Setting this.state.cards to the card json array
	state = {
		message: "Click an image to begin!",
		topScore: 0,
		curScore: 0,
		card: card
	};

	//trigger this function once the player clicked any cards
	selectCard = id => {
		// go through to each cards
		this.state.card.forEach((image) => {
			//If the image id will match the the selected card id
			if (image.id === id) {
				//call the resetGame function if the card has been clicked before
				if (image.clicked) {
					this.resetGame();
					return;
				}
				//update the scores if the card hasn't clicked
				else {
					this.updateScore();
					//Set the clciked card to true
					image.clicked = true;
					//Increase the Score by one point if the card is the first click
					this.setState({ curScore: this.state.curScore + 1});
					//If the topScore is higher than Score, keep the topScore as the highest
					if (this.state.curScore >= this.state.topScore) {
						this.highestScore();
					}
				}

			}
	
		});
		//call the shuffleCard function after the player each clickes
		this.shuffleCard(card);
	};

//random card function
	shuffleCard = (array) => {

		let shuffle = array.length;
		let temp;
		let index;
		//while there are elements in the card array
		while(shuffle > 0) {
			//Pick a random index from the card array
			index = Math.floor(Math.random() * shuffle);
			//Decrease it by one
			shuffle--;
			//swap the last element with it
			temp = array[shuffle];
			array[shuffle] = array[index];
			array[index] = temp;
		}
		//return the new random array
		return array;

	};

//Increasing the Score by one for each time the player hasn't clciked the same card
	updateScore = () => {
		this.setState((newState) => ({
			curScore: newState.curScore + 1
		}))
	};

//Increasing the topScore by one for each time the player hasn't clciked the same card
	highestScore = () => {
		this.setState((newState) => ({
			topScore: newState.topScore + 1
		}))
	};	

//Reset the game once the player clicked the same card
	resetGame = () => {
		//set each card to false
		this.state.card.forEach((image) => {
			image.clicked = false;
		})
		//set the Score back to 0
		this.setState({ 
			curScore: 0
		 })
	};

	render() {
		return (
			<div>
				<Navbar 
					className="navbar fixed-top" 
					message={this.state.message}
					curScore={this.state.curScore}
					topScore={this.state.topScore}
				/>
				<Header />

 				<div className="container">
 					{this.state.card.map(card => (
			 			<Card 
			 					selectCard={this.selectCard}
			 					shuffleCard={ () => this.shuffleCard(this.state.card)}
								key={card.id}
								id={card.id}
								clicked={card.clicked}
				 				image={card.image}
			 				/>
		
					))}
				</div>

			</div>

		);
	};
}

export default App;