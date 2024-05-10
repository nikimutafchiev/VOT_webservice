export default function Input(props) {
    return (<div style={{ display: "flex", flexDirection: "row", gap: "12px", alignItems: "center" }}>
        <h3 style={{ fontFamily: "sans-serif", fontWeight: "bold", fontSize: "18pt" }}>{props.title}</h3>
        <input style={{ borderRadius: "5px", border: "solid black 2px", width: "150px", height: "30px", fontFamily: "monospace", fontSize: "14pt", textAlign: "center" }} placeholder={props.placeholder} type={props.type} name={props.name} required />
    </div>)
}