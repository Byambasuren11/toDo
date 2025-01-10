import "../App.css";

const Bottom=(props)=>{
const {task,completedTasks,onClick}=props;
return (
    <>
     <div className="bottomCompletedTask">
              <p>
                {completedTasks.length} of {task.length} tasks completed
              </p>
              <p
                className="completedTaskDelete"
                onClick={onClick}
              >
                Clear Completed
              </p>
            </div>
    </>
)
}
 export default Bottom;