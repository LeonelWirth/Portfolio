import React from 'react';
import "./NavBar.css";


function NavBar() {
    return (<div className="nav_container">
        <div>
            <a className='nav_links' href="/"> {"<LEONEL />"}</a>
        </div>
        <div>
            <a className='nav_links' href="/"> {"PROJECTS"}</a>
            {/* <a className='nav_links' href="/"> {"BLOG"}</a> */}
        </div>
    </div>);
}

export default NavBar;