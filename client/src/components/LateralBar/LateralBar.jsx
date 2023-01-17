import React from 'react';
import github from "../../assets/Github.png"
import linkedin from "../../assets/LinkedIn.png"
import "./LateralBar.css"
function LateralBar() {
    return (<div className="LateralBar">

        <a href="https://github.com/LeonelWirth">
            <img src={github} width="40" height="40" />
        </a>
        <a href="https://www.linkedin.com/in/leonel-wirth/">
            <img src={linkedin} width="60" height="40" />
        </a>
    </div>);
}

export default LateralBar;