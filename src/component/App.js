import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

export function InputTask() {
	const [tasks, setTask] = useState([]);
	const [taskBox, setTaskBox] = useState("");
	const [alert, setAlert] = useState("");
	return (
		<div className="row mt-5">
			<div className="offset-md-4">
				<h1>To-do List App with ReactJS</h1>
				{alert !== "" ? <div class="alert alert-danger" role="alert">
					{alert}
				</div> : ""}
				<div className="form-group mb-0">
					<form>
						<input
							type="text"
							value={taskBox}
							onChange={event => onChangeHandler(event)}
							className="form-control"
							placeholder="What needs to be done?"
							onKeyPress={event => enterHandler(event)}></input>
					</form>
				</div>
				<ul className="list-group mt-1">{listMaker(tasks)}</ul>
				<ul className="list-group mt-1">
					<li className="list-group-item">
						{tasks.length} items left
					</li>
				</ul>
			</div>
		</div>
	);

	function listMaker(tasks) {
		if (tasks.length === 0) {
			return <li className="list-group-item">No tasks, add a task</li>;
		}
		let list = tasks.map(function (task, index) {
			return (
				<li className="list-group-item" key={task.toString()}>
					{task}
					<button type="button" className="btn btn-link float-right pl-1" onClick={() => handleRemove(task)}>
						<FaTimes className="text-right" />
					</button>
				</li>
			);
		});
		return list;
	}

	function enterHandler(e) {
		if (e.charCode === 13) {
			e.preventDefault();
			if (tasks.includes(e.target.value)) {
				setAlert("This task has already been entered")
			} else {
				setAlert("")
				setTask(state => [...state, e.target.value]);
				return setTaskBox("");
			}

		}
	}

	function handleRemove(id) {
		let newList = tasks.filter(task => {
			return task !== id;
		});
		return setTask(newList);
	}

	function onChangeHandler(e) {
		return setTaskBox(() => e.target.value);
	}
}

