import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Topbar from "./Components/Topbar";
import SubTopbar from "./Components/SubTopbar";

function App() {
	return (
		<div className="App">
			<Topbar />
			<SubTopbar />
		</div>
	);
}

export default App;
