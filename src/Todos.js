import React from 'react';
import {MDBIcon } from "mdbreact";


class  Todos extends React.Component{
state = {
    isChecked:false,
    ishide:false
}
handleChange=(event)=>{
    this.setState({isChecked:!(this.state.isChecked)})
    }
handleClick=(event)=>{
        this.setState({ishide:true})
        }

render(){
  return (
    <div className="container-fluid ml-4  row" style={{display:this.state.ishide ? "none":"flex"}}>
        <div className="col-md-11 col-10  blue-grey lighten-5 p-2 pt-3 border border-dark">
        <label>
        <input type="checkbox" checked={this.state.isChecked}  onChange={this.handleChange} /> <span className="ml-3 font-weight-bold" style={{fontSize:"1.25rem",textDecoration:this.state.isChecked ? "line-through" : "none"}} >{this.props.todo}</span>
        </label> 
        </div>
        <div className="p-2 border border-dark bin ">
        <a onClick={this.handleClick}>
        <MDBIcon far icon="trash-alt" size="2x" className="pt-2  "  />
        </a>  
        </div> 
    </div>
  )
}
}
export default Todos;