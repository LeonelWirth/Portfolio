import './StudiesContainer.css'
import React from 'react';
import { useState } from 'react';
import Studies from './Studies';

function StudiesContainer() {
    const [studie, setStudie] = useState([{
        title: "Full Stack Developer:",
        description: "Stack: Javascript, React, Redux, NodeJS, Express, Sequelize & PostgreSQL.",
        pictures: ["https://res.cloudinary.com/doxzokiqp/image/upload/v1675296085/Portfolio/CertificadoHenry_uqlbnf.png"]
    },
    {
        title: "Ingeniero electrónico:",
        description: "Took part in multiple projects: Motor speed controler using C and FreeRTOS, digital music signal live filtering, electromiography sensors, among others.",
        pictures: ["https://res.cloudinary.com/doxzokiqp/image/upload/v1675296620/Portfolio/unco_f1x3zi.webp"]
    }])






    return (<div>
        <div className='sub-title'>
            <h2>Estudios realizados</h2>
        </div>
        <div className="StudiesContainer">
            {studie.map((e) => <Studies title={e.title} description={e.description} key={Math.random()} pictures={e.pictures} />)}
            {/* <p>Full Stack Developer</p>
            <p>Ingeniero electrónico</p> */}
        </div>
    </div>);
}

export default StudiesContainer;