import React from 'react'
import ToDoItem from './ToDoItem';

export default class ToDosContainer extends  React.Component{ 
  
    state = {
        InputText:"",
      }
      
  formSubmitted=(e)=>{
    e.preventDefault()
    if(this.state.InputText.trim() !=="" && this.state.InputText.length <100){
    this.props.AddItemsProps(this.state.InputText)
}
this.setState({
    InputText:""
  })
}
  


      
  
    render()  {


const todosItems =this.props.toDosProps.map(task=>{
    return(
       <ToDoItem key={task.id} updateItemsProps={this.props.updateItemsProps} taskProps={task} deleteItemProps={this.props.deleteItemProps}/>
    );
 })

    return (
        <div className='todos-container'>
            <form className="todo-form" onSubmit={this.formSubmitted}>
                <label className='input-item'>
                    <input type='text' name='todo' onChange={e=>this.setState({InputText:e.target.value})}/>
                </label>
             <input type="submit" className="btn" value="ADD"/>
            </form>
<div className="todos">
    <h3>TO DO</h3>
    {todosItems}
     </div>
</div>

)
}
}