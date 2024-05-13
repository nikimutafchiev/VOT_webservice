import Tasks from "./Tasks";
import TaskAdder from "./TaskAdder";
export default function TaskManager({ tasks }) {
    return (
        <>
            <TaskAdder></TaskAdder>
            <Tasks tasks={tasks}></Tasks>
        </>
    )
}