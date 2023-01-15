import "./Proyect.css"

function Proyect(props) {
    return (<div className="Proyect">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
    </div>);
}

export default Proyect;