import { FaRegCalendarAlt } from "react-icons/fa";
export default function Tasks(props) {
    const tasksList = props.tasks.map((task) => <li style={{ background: "#b2d0df", display: "flex", flexDirection: "column", padding: "10px", gap: "4px" }}>
        <div style={{ fontSize: "16pt" }}>{task.name}</div>
        <par style={{ fontFamily: "sans-serif" }}>{task.description}</par>
        <div style={{ fontSize: "12pt" }}><FaRegCalendarAlt /> {task.due}</div></li>)
    return (
        <>
            <h1 style={{ fontFamily: "sans-serif" }}>Tasks</h1>
            <ul style={{ margin: "3px", display: "flex", gap: "5px", flexDirection: "column" }}>
                {tasksList}
            </ul></>)
}