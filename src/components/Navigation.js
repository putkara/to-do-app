import React from 'react'
import logo from "../image/logo.png"
import {Link} from "react-router-dom"
const Navigation=()=> {
    return (
        <nav>
            <div class="left">
                <Link to="/"><img src={logo} alt="logo"/></Link>
                
            </div>

            <div class="right">
                <Link to="/help">HELP</Link>
            </div>
        </nav>
    )
}

export default Navigation
