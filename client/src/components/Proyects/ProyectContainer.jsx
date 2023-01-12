import "./ProyectContainer.css"
import React from "react";
import { useState } from "react";
import Proyect from "./Proyect";

function ProyectContainer() {
    const [proyect, setProyect] = useState([{
        title: "Sport Spaces Booking App:",
        description: "Developed a sport spaces booking app with a web supplier and mobile user framework."
    },
    {
        title: "Food Showcase App:",
        description: "Developed recipes and food catalogue app."
    },
    {
        title: "Excel to program objects:",
        description: "App to transform the information of a client spread sheet into a .csv file to import into a SCADA software (WonderWare)."
    },
    {
        title: "Note App",
        description: "Developed a note app"
    }])
    return (<div>
        <div className="sub-title">
            <h2>Proyectos desarrollados: </h2>
        </div>
        <div className="ProyectContainer">
            {proyect.map((e) => <Proyect title={e.title} description={e.description} key={Math.random()} />)}
        </div>
    </div>);
}

export default ProyectContainer;