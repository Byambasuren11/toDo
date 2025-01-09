import { useState } from "react";
import * as React from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import moment from "moment";
import Button from "./components/Button";

function App() {
  //console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

  const [task, setTask] = useState([]);
  const [inputValue, setInputValue] = useState();
  const [filterState, setFilterState] = useState("all");
  const [logs, setLog] = useState([]);
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const addTask = () => {
    const newTask = {
      name: inputValue,
      status: "active",
      id: uuidv4(),
    };
    setTask((task) => [...task, newTask]);

    setLog([
      ...logs,
      {
        name: newTask.name,
        id: newTask.id,
        logs: [
          {
            status: task.status,
            moment: moment().format("MMMM Do YYYY, h:mm:ss a"),
          },
        ],
      },
    ]);

    setInputValue("");
  };
  const handleTasksChange = (id) => {
    setTask(
      task.map((todo) => {
        if (todo.id !== id) return todo;

        if (todo.status == "completed") {
          return { ...todo, status: "active" };
        } else {
          return { ...todo, status: "completed" };
        }
      })
    );
    setLog(
      logs.map((log) => {
        if (log.id !== id) return log;

        if (log.status == "completed") {
          return { ...log, status: "active" };
        } else {
          return { ...log, status: "completed" };
        }
      })
    );
  };
  console.log(logs);
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
            <Button className={"addButton"} onClick={addTask} text="All" />
          </div>
          <div className="categorize">
            <Button
              className={"allList"}
              text="All"
              onClick={() => handleFilterStateChange("all")}
              style={{
                background: filterState === "all" ? "#3c82f6" : "#f3f4f6",
              }}
            />
            <Button
              className={"activeList"}
              text="Active"
              onClick={() => handleFilterStateChange("active")}
              style={{
                background: filterState === "active" ? "#3c82f6" : "#f3f4f6",
              }}
            />
            <Button
              className={"completedList"}
              text="Completed"
              onClick={() => handleFilterStateChange("completed")}
              style={{
                background: filterState === "completed" ? "#3c82f6" : "#f3f4f6",
              }}
            />
            <Button
              className={"logList"}
              text="Log"
              onClick={() => handleFilterStateChange("log")}
              style={{
                background: filterState === "log" ? "#3c82f6" : "#f3f4f6",
              }}
            />
          </div>
        </div>
        <div className="noTaskYet">
          {completedTasks.length === 0 && filterState === "completed" && (
            <div>No completed task</div>
          )}
          {activeTasks.length === 0 && filterState === "active" && (
            <div>No active task</div>
          )}
          <div>
            <div className="todoList">
              {task
                .filter((element) => {
                  if (filterState === "all") {
                    return true;
                  } else if (filterState === element.status) {
                    return element;
                  }
                })
                .map((element, index) => (
                  <div className="todo" key={index}>
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
                    <Button
                      className={"deleteButton"}
                      text="Delete"
                      onClick={() => deleteTask(element.id)}
                    />
                  </div>
                ))}
            </div>
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
