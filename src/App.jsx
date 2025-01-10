import { useState } from "react";
import * as React from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import moment from "moment";
import Button from "./components/Button";
import EmptyMessage from "./components/Empty-Message";
import Bottom from "./components/Bottom";
import List from "./components/Add-List";
//import Style from "./components/style";

function App() {
  //console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

  const [task, setTask] = useState([]);
  const [inputValue, setInputValue] = useState("");
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
    console.log(id);
    
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
            <Button className={"addButton"} onClick={addTask} text="Add" />
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
          <EmptyMessage 
          filterState={filterState}
          task={task}
           completedTasks={completedTasks}
           activeTasks={activeTasks}
          />
          <div>
            <List
            task={task}
            filterState={filterState}
            onChange={handleTasksChange}
            deleteTask={deleteTask}
            />
            <Bottom 
            completedTasks={completedTasks}
            onClick={deleteCompletedTask}
            task={task}
            />
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
