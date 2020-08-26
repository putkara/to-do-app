import React from 'react'
import logo from "../image/logo.png"

const Navigation=()=> {
    return (
        <nav>
            <div class="left">
                <img src={logo} alt="logo"/>
            </div>

            <div class="right">
                <a href="#">HELP</a>
            </div>
        </nav>
    )
}

export default Navigation
