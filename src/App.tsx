import EmployeeCard from "./components/EmployeeCard";
import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

function App() {
	const [employee, setEmployee] = useState(null);

	useEffect(() => {
		getEmployee();
		console.log("component did mount");
	}, []);

	const getEmployee = () => {
		// Send the request
		fetch("https://randomuser.me/api?nat=en")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				setEmployee(data.results[0]);
			});
	};

	return (
		<div className="App">
			{employee && <EmployeeCard employee={employee} />}
			<button type="button" onClick={getEmployee}>
				Get employee
			</button>
		</div>
	);
}
export default App;
