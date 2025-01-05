import { useState } from "react";
import * as React from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all"); // Filter: "all", "active", "completed"

  const onClick = () => {
    if (inputValue.trim() !== "") {
      setTask((prevTask) => [...prevTask, { name: inputValue, isDone: false }]);
      setInputValue(""); // Clear input after adding
    }
  };

  const toggleTaskCompletion = (index) => {
    setTask((prevTask) =>
      prevTask.map((el, i) =>
        i === index ? { ...el, isDone: !el.isDone } : el
      )
    );
  };

  const filteredTasks = task.filter((el) => {
    if (filter === "active") return !el.isDone;
    if (filter === "completed") return el.isDone;
    return true; // "all"
  });

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
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button className="addButton" onClick={onClick}>
              Add
            </button>
          </div>
          <div className="categorize">
            <button className="allList" onClick={() => setFilter("all")}>
              All
            </button>
            <button className="activeList" onClick={() => setFilter("active")}>
              Active
            </button>
            <button
              className="completedList"
              onClick={() => setFilter("completed")}
            >
              Completed
            </button>
          </div>
        </div>
        <div>
          {task.length === 0 ? (
            <p className="notTaskYetText">No tasks yet. Add one above!</p>
          ) : (
            <div className="todo">
              {filteredTasks.map((el, i) => (
                <p key={i}>
                  <input
                    type="checkbox"
                    checked={el.isDone}
                    onChange={() => toggleTaskCompletion(i)}
                  />
                  {el.name}
                </p>
              ))}
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
