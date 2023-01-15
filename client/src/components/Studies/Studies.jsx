import "./Studies.css"

function Studies(props) {
    return (<div className="Studies">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
    </div>);
}

export default Studies;