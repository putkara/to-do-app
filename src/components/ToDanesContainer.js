import React from 'react'

export default function ToDanesContainer() {

const todanes = [
    {text:"Creat a App",done: true},
    {text:"Do not my work",done: true},
    {text:"Get a job",done: true},
    {text:"Feed cats",done: true},
];

const ToDanesItems = todanes.map((task)=>{
    return(
        <div className="todones-item">
            <p>{task.text}</p>
            <div className="action">
                <button className="btn"> &#8635;</button>
            </div>
</div>
    );
 });

    return (
        <div className='todones-container'>
            <h3>BACKLOG</h3>
            {ToDanesItems}
        </div>
    )
}
