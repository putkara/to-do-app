import React from 'react'
import Eror from '../image/error-404.jpg'
import {Link} from 'react-router-dom'

export default function NotFound() {
    return (
        <div>
            <h1>Page not Found</h1>
            <div><Link to="/"><img src={Eror} alt="Eror"width="350"/></Link></div>
            <br></br>
            <div><Link className="btn" to="/">Go Home</Link></div>
        </div>
    )
}
