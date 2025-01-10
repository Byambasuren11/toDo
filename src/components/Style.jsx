import Button from "./components/Button";
import EmptyMessage from "./components/Empty-Message";
import Bottom from "./components/Bottom";
import List from "./components/Add-List";
import "../App.css";

const Style = (props) => {
  const { onChange, onClick } = props;
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
              onChange={() => handleTasksChange(task.id)}
              checked={task.status == "completed"}
            />
            <Bottom
              completedTasks={completedTasks}
              onClick={() => deleteCompletedTask()}
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
};
export default Style;
