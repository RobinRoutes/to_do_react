import React, { useState, useEffect } from "react";
import './App.css';
// Importing the components 
import Form from "./components/Form"
import TodoList from "./components/TodoList"

function App() {
	// Stats
	const [inputText, setInputText] = useState('');
	const [todos, setTodos] = useState([]);
	const [status, setStatus] = useState('all');
	const [filteredTodos, setFilteredTodos] = useState([]);
	// use EFFECT
	useEffect(() => {
		filterHandler();
	}, [todos, status]);
	//functions 
	const filterHandler = () => {
		switch (status) {
			case 'completed':
				setFilteredTodos(todos.filter(todo => todo.completed === true));
				break;
			case 'uncompleted':
				setFilteredTodos(todos.filter(todo => todo.completed === false));
				break;
			default:
				setFilteredTodos(todos);
				break;
		}
	};
	return (
		<div className="App">
			<header>
				<h1>
					My Todo List
				</h1>
			</header>
			<Form todos={todos} setTodos={setTodos} setInputText={setInputText} inputText={inputText} status={status} setStatus={setStatus} filteredTodos={filteredTodos} />
			<TodoList todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
		</div>
	);
}

export default App;
