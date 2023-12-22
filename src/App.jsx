import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Topbar from "./Components/Topbar";
import SubTopbar from "./Components/SubTopbar";
import ErFoot from "./Components/ErFoot";
import Gallery from "./Components/Gallery";

function App() {
	return (
		<div className="App">
			<Topbar />
			<SubTopbar />
			<Gallery />
			<ErFoot />
		</div>
	);
}

export default App;
