import Button from "./Button";
import "../App.css";

const List=(props)=>{
const {task, filterState,onChange,deleteTask}=props;

return(
    <>
     <div className="todoList">
              {task
                .filter((element) => {
                  if (filterState === "all") {
                    return true;
                  } else if (filterState === element.status) {
                    return element;
                  }
                })
                .map((element, index) => {
                    console.log(element.id);
                    
                 return  <div className="todo" key={index}>
                    <input
                      checked={element.status == "completed"}
                      type="checkbox"
                      onChange={()=>onChange(element.id)}
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
                      onClick={()=>deleteTask(element.id)}
                    />
                  </div>
})}
            </div>
    </>
)
}
export default List