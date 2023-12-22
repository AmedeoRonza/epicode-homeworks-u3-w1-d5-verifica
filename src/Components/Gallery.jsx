import React from "react";

class Gallery extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			trendingMovies: [],
			watchAgainMovies: [],
			newReleasesMovies: [],
		};
	}

	componentDidMount() {
		this.fetchMovies("trending", "Trending Now");
		this.fetchMovies("watchAgain", "Watch it Again");
		this.fetchMovies("newReleases", "New Releases");
	}

	async fetchMovies(endpoint, category) {
		try {
			const response = await fetch(`http://www.omdbapi.com/?s=${endpoint}&apikey=456e0c77`);
			const data = await response.json();
			this.setState((prevState) => ({
				[`${endpoint}Movies`]: data.Search || [],
			}));
		} catch (error) {
			console.error(`Errore nella fetch per ${category}:`, error);
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
				<h4>Trending Now</h4>
				<div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
					{this.renderMovies(this.state.trendingMovies)}
				</div>
				<h4>Watch it Again</h4>
				<div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
					{this.renderMovies(this.state.watchAgainMovies)}
				</div>
				<h4>New Releases</h4>
				<div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4">
					{this.renderMovies(this.state.newReleasesMovies)}
				</div>
			</div>
		);
	}
}

export default Gallery;
