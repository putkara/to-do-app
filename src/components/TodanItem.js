import React from 'react'

export default function TodanItem({taskProps,updateItemsProps, deleteItemProps}) {
    return (
        <div className="todones-item">
        <p>{taskProps.text}</p>
        <div className="action">
            <button className="btn" onClick={()=>updateItemsProps(taskProps.id)}> &#8635;</button>
            <button className="btn" onClick={()=>deleteItemProps(taskProps.id)}/*  onClick={changeStatus} */> X </button>
        </div>
</div>
    )
}
