import "./ProyectContainer.css"
import React from "react";
import { useState } from "react";
import Proyect from "./Proyect";

function ProyectContainer() {
    const [proyect, setProyect] = useState([{
        title: "Proyecto 1",
        description: "Soy el proyecto 1"
    },
    {
        title: "Proyecto 2",
        description: "Soy el proyecto 1"
    },
    {
        title: "Proyecto 3",
        description: "Soy el proyecto 1"
    },
    {
        title: "Proyecto 4",
        description: "Soy el proyecto 1"
    },
    {
        title: "Proyecto 5",
        description: "Soy el proyecto 1"
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