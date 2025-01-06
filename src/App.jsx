import { useState } from "react";
import * as React from "react";
import { v4 as uuidv4 } from 'uuid';
import "./App.css";

function App() {
  const [task, setTask] = useState([]);
  const [inputValue, setInputValue] = useState();
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const addTask = () => {
    setTask((task) => [...task, { name: inputValue, status: "active", id:uuidv4() }]);
     setInputValue("");
  };
  return (
    <>
      <div className="body">
        <div className="container">
          <div className="title">To-Do List</div>
          <div className="inputContainer">
            <input
              id="input"
              className="inputToDo"
              value={inputValue}

              onChange={handleInputChange}
            />
            <button className="addButton" onClick={addTask}>
              Add
            </button>
          </div>
          <div className="categorize">
            <button className="allList">All</button>
            <button className="activeList">Active</button>
            <button className="completedList">Complated</button>
          </div>
        </div>
        <div className="noTaskYet">
          {task.length === 0 ? (
            <p> No tasks yet. Add one above!</p>
          ) : (
            <div>
              <p className="todoList">
                {task.map((element, i) => (
                  <p className="todo" key={i}>
                    <input type="checkbox" 
                    />
                    {element.name}
                  </p>
                ))}
              </p>
            </div>
          )}
        </div>
        <div className="poweredBy">
          <p>Powered by </p>
          <a href="https://pinecone.mn/" className="a">
            Pinecone Academy
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
