import "./ProjectContainer.css"
import React from "react";
import { useState } from "react";
import Proyect from "./Project";

function ProyectContainer() {
    const [proyect, setProyect] = useState([{
        title: "Sport Spaces Booking App:",
        description: "Developed a sport spaces booking app with a web supplier and mobile user framework.",
        pictures: ["https://res.cloudinary.com/doxzokiqp/image/upload/v1674917383/Portfolio/PG/Resumen_usjs3e.png"],
    },
    {
        title: "Food Showcase App:",
        description: "Developed recipes and food catalogue app.",
        pictures: ["https://res.cloudinary.com/doxzokiqp/image/upload/v1674917612/Portfolio/PI/Home_dthxiq.png"],
    },
    {
        title: "Excel to program objects:",
        description: "App to transform the information of a client spread sheet into a .csv file to import into a SCADA software (WonderWare).",
        pictures: ["https://res.cloudinary.com/doxzokiqp/image/upload/v1675296796/Portfolio/Wonderware_e1f7fd.jpg"],
    },
    {
        title: "Note App",
        description: "Developed a note app",
        pictures: ["https://res.cloudinary.com/doxzokiqp/image/upload/v1675297153/Portfolio/NoteApp/NoteAppDark_bf8w9n.png", "https://res.cloudinary.com/doxzokiqp/image/upload/v1675297153/Portfolio/NoteApp/NoteAppLight_aaev1w.png", "https://res.cloudinary.com/doxzokiqp/image/upload/v1675297153/Portfolio/NoteApp/NoteAppFilter_fvo7bn.png"],
    }])
    return (<div>
        <div className="sub-title">
            <h2>Proyectos desarrollados: </h2>
        </div>
        <div className="ProyectContainer">
            {proyect.map((e) => <Proyect title={e.title} description={e.description} key={Math.random()} pictures={e.pictures} />)}
        </div>
    </div>);
}

export default ProyectContainer;