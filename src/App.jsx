import { useState } from "react";
import * as React from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const [task, setTask] = useState([]);
  const [inputValue, setInputValue] = useState();
  const [filterState, setFilterState] = useState("all");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const addTask = () => {
    setTask((task) => [
      ...task,
      { name: inputValue, status: "active", id: uuidv4() },
    ]);
    setInputValue("");
  };
  console.log(task);
  const handleTasksChange = (id) => {
    console.log(id);
    const tasks = task.map((todo) => {
      if (todo.id === id) {
        return { ...todo, status: "completed" };
      } else {
        return todo;
      }
    });
    setTask(tasks);
  };
  const handleFilterStateChange = (state) => {
    setFilterState(state);
    //console.log(state);
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
            <button
              className="allList"
              onClick={() => handleFilterStateChange("all")}
              style={{
                background: filterState === "all" ? "#3c82f6" : "#f3f4f6",
              }}
            >
              All
            </button>
            <button
              className="activeList"
              onClick={() => handleFilterStateChange("active")}
              style={{
                background: filterState === "active" ? "#3c82f6" : "#f3f4f6",
              }}
            >
              Active
            </button>
            <button
              className="completedList"
              onClick={() => handleFilterStateChange("completed")}
              style={{
                background: filterState === "completed" ? "#3c82f6" : "#f3f4f6",
              }}
            >
              Complated
            </button>
          </div>
        </div>
        <div className="noTaskYet">
          {task.length === 0 ? (
            <p> No tasks yet. Add one above!</p>
          ) : (
            <div>
              <p className="todoList">
                {task
                  .filter((element) => {
                    if (filterState === "all") {
                      return true;
                    } else if (filterState === element.status) {
                      return element;
                    }
                  })
                  .map((element) => (
                    <p className="todo">
                      <input
                        type="checkbox"
                        onChange={() => handleTasksChange(element.id)}
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
