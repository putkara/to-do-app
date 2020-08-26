import React from 'react';
import '../css/App.scss'
import Navigaton from "./Navigation"
import ToDosContainer from './ToDosContainer';
import ToDanesContainer from './ToDanesContainer';

//we do state here becoze it was seperet , if need chage trupe or false
class App  extends  React.Component{
  constructor(props) {
    super(props)
    this.state = {
      items: [
        /*
        {id:0, text:"Wash my Cat",done: false},
        {id:1,text:"Do my work",done: false},
        {id:2,text:"Pay my rent",done: false},
        {id:3,text:"Walk the Dog",done: false},
        {id:4,text:"Creat a App",done: true},
        {id:5,text:"Go to LITTLE BIG concert",done: true},
        {id:6,text:"Get a job",done: true},
        {id:7,text:"Feed cats",done: true},
        */
      ]

    }
  }
 
updateItem=(id)=>{
  const updateItems = this.state.items.map(
    item=>{
      if(item.id===id){
        item.done = !item.done
        return item
      }else{
        return item
      }
    })
  this.setState({
    items:updateItems
      
    
  })

}

deleteItem=(id)=>{
  const updatedItems = this.state.items.filter(item=>item.id !== id)

  this.setState({
    items:updatedItems
  })
}

AddItem=(IputText)=>{
  const item={
    id:this.state.items.length,
    text:IputText,
    done:false
  }
  this.setState({
    items:[item, ...this.state.items]
  })

}

render(){
  const toDones= this.state.items.filter(item=>item.done===true)
  const toDos= this.state.items.filter(item=>item.done===false)
  return (
    <div  className="app">
    <Navigaton/>
    <ToDosContainer deleteItemProps= {this.deleteItem} updateItemsProps={this.updateItem} toDosProps={toDos} AddItemsProps={this.AddItem}/>
    <ToDanesContainer deleteItemProps= {this.deleteItem} updateItemsProps={this.updateItem} toDonesProps={toDones}/>
    </div>
  );
}
 } 

export default App;
