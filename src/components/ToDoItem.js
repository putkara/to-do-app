import React from 'react'
//we can do diferent   ToDoItem(props) or ({taskProps}) then we dont need props
export default function ToDoItem(props) {
    return (
        <div className="todo-item">
            <p>{props.taskProps.text}</p>
            <div className="action">
                <button className="btn" onClick={()=>props.updateItemsProps(props.taskProps.id)}> &#10004;</button>
                <button className="btn" onClick={()=>props.deleteItemProps(props.taskProps.id)}> X </button>
            </div>
</div>
    )
}
