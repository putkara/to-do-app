import React from 'react'
import TodanItem from './TodanItem';

export default function ToDanesContainer(props) {



const ToDanesItems = props.toDonesProps.map((task)=>{
    return(
      <TodanItem key={task.id} updateItemsProps={props.updateItemsProps}  taskProps={task}/>
    );
 });

    return (
        <div className='todones-container'>
            <h3>BACKLOG</h3>
            {ToDanesItems}
        </div>
    )
}


