import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Topbar from "./Components/Topbar";
import SubTopbar from "./Components/SubTopbar";
import ErFoot from "./Components/ErFoot";

function App() {
	return (
		<div className="App">
			<Topbar />
			<SubTopbar />
			<ErFoot />
		</div>
	);
}

export default App;
