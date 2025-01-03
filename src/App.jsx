import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  const [task, setTask] = useState([]);

  const onClick = () => {
    setTask((task) => [...task, {name: input.value, isDone: false}]);
  };
  console.log(task);
  return (
    <>
      <div className="body">
        <div className="container">
          <div className="title">To-Do list</div>
          <div className="inputContainer">
            <input id="input" className="inputToDo" />
            <button className="addButton" onClick={onClick}>
              Add
            </button>
          </div>
          <div className="categorize">
            <button className="allList">All</button>
            <button className="activeList">Active</button>
            <button className="complatedList">Complated</button>
          </div>
        </div>
        <div className="notYet">
          {
            task.length===0 ? <p> No tasks yet. Add one above!</p> : 
            
              task.map((el, i ) => (
                <p key={i}>{el.name}</p>
              ))
            
            }
          
        </div>
        <div className="poweredBy">
          <p>Powered by </p>
          <a href="https://pinecone.mn/" className="a">
            Pinecone academy
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
