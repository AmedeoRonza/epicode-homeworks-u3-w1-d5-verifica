import React from "react";import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { a, Navbar, Nav, Container } from "react-bootstrap";
import netflixLogo from "../assets/logo.png";

const Topbar = () => {
	return (
		<nav className="navbar navbar-expand-lg " data-bs-theme="dark" style={{ backgroundColor: "#221f1f" }}>
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					<img src={netflixLogo} style={{ width: "100px", height: "55px" }} alt="Logo" />
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link active fw-bold text-white" href="#">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link fw-bold text-white opacity-50" href="#">
								TV Shows
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link fw-bold text-white opacity-50" href="#">
								Movies
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link fw-bold text-white opacity-50" href="#">
								Recently Added
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link fw-bold text-white opacity-50" href="#">
								My List
							</a>
						</li>
					</ul>
					<div className="d-flex align-items-center">
						<i className="bi bi-search icons"></i>
						<div id="kids" className="fw-bold">
							KIDS
						</div>
						<i className="bi bi-bell icons"></i>
						<i className="bi bi-person-circle icons"></i>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Topbar;
