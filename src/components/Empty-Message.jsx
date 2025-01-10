const EmptyMessage=(props)=>{
const {filterState,task,completedTasks,activeTasks}=props;
return (
<>
{completedTasks.length === 0 && filterState === "completed" && (
            <div>No completed tasks found</div>
          )}
          {activeTasks.length === 0 && filterState === "active" && (
            <div>No active tasks found</div>
          )}
          {task.length === 0 && filterState === "all" && (
            <div>No task yet. Add one above!</div>
          )}
</>
)
}
export default EmptyMessage;