import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<div className="app">
			<Navbar/>
			<div className="container">
				<Jumbotron/>
				<div className="row">
					<Card/>
					<Card/>
					<Card/>
					<Card/>
			    </div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
