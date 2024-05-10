import Input from "./InputForm"
export default function Login() {
    return (<>
        <form action="/add_user" method="POST">
            <div style={{ display: "flex", justifyContent: "center", margin: "10px" }}>
                <div style={{ position: "relative", display: "inline-flex", flexDirection: "column", borderRadius: "10px", background: "#d2d4da", justifyContent: "center", padding: "5px", width: "350px" }}>
                    <Input {...{ title: "Username", type: "text", name: "username", placeholder: "Enter name..." }} />
                    <Input {...{ title: "Password", type: "password", name: "password", placeholder: "Enter password..." }} />
                    <button style={{ borderRadius: "4px", width: "100px", height: "40px", margin: "5px", border: "solid black 1px", alignSelf: "center" }} type="submit">Add new user</button>
                </div>
            </div>
        </form >
    </>)
}