import { useState } from "react";
import * as React from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import moment from "moment";

function App() {
  //console.log(moment().format("lll"));

  const [task, setTask] = useState([]);
  const [inputValue, setInputValue] = useState();
  const [filterState, setFilterState] = useState("all");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const addTask = () => {
    setTask((task) => [
      ...task,
      {
        name: inputValue,
        status: "active",
        id: uuidv4(),
        logs: [{ status: "active", moment: moment().format("llll") }, {}, {}],
      },
    ]);
    setInputValue("");
  };

  const handleTasksChange = (id) => {
    const tasks = task.map((todo) => {
      if (todo.id === id) {
        if (todo.status == "completed") {
          return { ...todo, status: "active" };
        } else {
          return { ...todo, status: "completed" };
        }
      } else {
        return todo;
      }
    });
    setTask(tasks);
  };

  const handleFilterStateChange = (state) => {
    setFilterState(state);
  };

  const deleteTask = (id) => {
    alert("Are you sure you want to delete this task?");
    const todos = task.filter((todo) => {
      if (todo.id !== id) {
        return todo;
      }
    });
    setTask(todos);
  };

  const deleteCompletedTask = () => {
    alert("Are you sure you want to delete completed tasks?");
    const todos = task.filter((todo) => {
      if (todo.status !== "completed") {
        return todo;
      }
    });
    setTask(todos);
  };

  const completedTasks = task.filter((task) => task.status === "completed");

  const activeTasks = task.filter((task) => task.status === "active");

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
                    <div className="todo">
                      <input
                        checked={element.status == "completed"}
                        type="checkbox"
                        onChange={() => handleTasksChange(element.id)}
                      />
                      <p
                        style={{
                          textDecoration:
                            element.status === "completed"
                              ? "line-through"
                              : "none",
                        }}
                      >
                        {element.name}
                      </p>

                      <button
                        className="deleteButton"
                        onClick={() => deleteTask(element.id)}
                      >
                        delete
                      </button>
                    </div>
                  ))}
              </p>
              <div className="bottomCompletedTask">
                <p>
                  {completedTasks.length} of {task.length} tasks completed
                </p>
                <p
                  className="completedTaskDelete"
                  onClick={() => deleteCompletedTask()}
                >
                  Clear Completed
                </p>
              </div>
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
