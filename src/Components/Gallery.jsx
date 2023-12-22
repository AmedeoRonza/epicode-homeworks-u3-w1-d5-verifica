import React from "react";
class Gallery extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			batmanMovies: [],
			harryPotterMovies: [],
			starTrekMovies: [],
		};
	}

	componentDidMount() {
		this.fetchMovies("Batman", "batmanMovies");
		this.fetchMovies("Harry Potter", "harryPotterMovies");
		this.fetchMovies("Star Trek", "starTrekMovies");
	}

	async fetchMovies(title, stateKey) {
		try {
			const response = await fetch(
				`http://www.omdbapi.com/?s=${title}&apikey=456e0c77&type=movie&page=1&plot=short`
			);
			const data = await response.json();
			this.setState((prevState) => ({
				[stateKey]: data.Search.slice(0, 6) || [],
			}));
		} catch (error) {
			console.error(`Errore nella fetch per ${title}:`, error);
		}
	}

	renderMovies(movies) {
		return movies.map((movie, index) => (
			<div key={index} className="col mb-2 text-center px-1">
				<img className="img-fluid" src={movie.Poster} alt={movie.Title} />
			</div>
		));
	}

	render() {
		return (
			<div>
				<h4>Batman Movies</h4>
				<div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
					{this.renderMovies(this.state.batmanMovies)}
				</div>
				<h4>Harry Potter Movies</h4>
				<div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
					{this.renderMovies(this.state.harryPotterMovies)}
				</div>
				<h4>Star Trek Movies</h4>
				<div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
					{this.renderMovies(this.state.starTrekMovies)}
				</div>
			</div>
		);
	}
}

export default Gallery;
