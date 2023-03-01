import "./Project.css"

function Proyect(props) {
    return (<div className="Proyect">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <div className="miniature" >
            <img src={props.pictures[0] ? props.pictures[0] : "https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg"} alt="Image not found" width="192" height="108" />
        </div>
    </div>);
}

export default Proyect;