import React from 'react'

export default function TodanItem({taskProps,updateItemsProps}) {
    return (
        <div className="todones-item">
        <p>{taskProps.text}</p>
        <div className="action">
            <button className="btn" onClick={()=>updateItemsProps(taskProps.id)}> &#8635;</button>
        </div>
</div>
    )
}
