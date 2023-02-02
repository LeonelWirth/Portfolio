import "./Studies.css"

function Studies(props) {
    return (<div className="Studies">
        <h3>{props.title}</h3>
        <p>{props.description}</p>

        <img src={props.pictures[0] ? props.pictures[0] : "https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg"} alt="Image not found" width="192" height="108" />
    </div>);
}

export default Studies;