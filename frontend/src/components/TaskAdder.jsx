import Input from "./InputForm"

export default function TaskAdder() {
    return (<>
        <form action="/add_task" method="POST">
            <div style={{ position: "relative", display: "inline-flex", flexDirection: "column", borderRadius: "10px", background: "#d2d4da", justifyContent: "center", width: "95%", padding: "5px" }}>
                <Input {...{ title: "Title", type: "text", name: "title", placeholder: "Task 1" }} />
                <Input {...{ title: "Descripition", type: "text", name: "description", placeholder: "Description" }} />
                <Input {...{ title: "Due Date", type: "date", name: "due_date" }} />
                <Input {...{ title: "User ID", type: "number", name: "user_id", placeholder: "1" }} />
                <button style={{ borderRadius: "4px", width: "100px", height: "40px", margin: "5px", border: "solid black 1px" }} type="submit">Add Task</button>
            </div>

        </form >
    </>
    )
}