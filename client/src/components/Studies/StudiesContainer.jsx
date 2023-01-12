import './StudiesContainer.css'
import React from 'react';
import { useState } from 'react';
import Studies from './Studies';

function StudiesContainer() {
    const [studie, setStudie] = useState([{
        title: "Full Stack Developer:",
        description: "Stack: Javascript, React, Redux, NodeJS, Express, Sequelize & PostgreSQL."
    },
    {
        title: "Ingeniero electrónico:",
        description: "Took part in multiple projects: Motor speed controler using C and FreeRTOS, digital music signal live filtering, electromiography sensors, among others."
    }])






    return (<div>
        <div className='sub-title'>
            <h2>Estudios realizados</h2>
        </div>
        <div className="StudiesContainer">
            {studie.map((e) => <Studies title={e.title} description={e.description} key={Math.random()} />)}
            {/* <p>Full Stack Developer</p>
            <p>Ingeniero electrónico</p> */}
        </div>
    </div>);
}

export default StudiesContainer;