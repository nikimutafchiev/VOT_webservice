
export default function Tasks(props) {
    const tasksList = props.tasks.map((task) => <li>{task}</li>)
    return (
        <>
            <h1 style={{ fontFamily: "sans-serif" }}>Tasks</h1>
            <ul style={{ margin: "3px" }}>
                {tasksList}
            </ul></>)
}