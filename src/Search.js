import React from "react";
import {MDBInput,MDBBtn} from "mdbreact";
import Todos from "./Todos"
class Search extends React.Component {
    state = {
        search:"",
        tododisplay:'',
        tododisplayarr:[],
        todos:[]
    }
    
    submitForm  = (event)=>{
        if(event.charCode){
            if(event.charCode==13){
                if(document.querySelector(".textinput").value!="" ){
                    document.querySelector(".alert1").style.display="none";
                    this.setState({tododisplay:this.state.search})
                    this.state.tododisplayarr.push(this.state.search);
                    this.setState({todos:this.state.tododisplayarr.map(x=><Todos todo={x} />)})
                    }
                    else{
                    document.querySelector(".alert1").style.display="block";
                    } 
                    this.setState({search:""})
            }
        }
        else{
        if(document.querySelector(".textinput").value!="" ){
        document.querySelector(".alert1").style.display="none";
        this.setState({tododisplay:this.state.search})
        this.state.tododisplayarr.push(this.state.search);
        this.setState({todos:this.state.tododisplayarr.map(x=><Todos todo={x} />)})
        }
        else{
        document.querySelector(".alert1").style.display="block";
        }
        this.setState({search:""})}
    }
    render(){
  return (
      <div>
      <div  data-test="alert" class="alert alert-danger alert1" role="alert" style={{display:"none"}} >
        Add Your To Do  in the input 
      </div>
    <div className="row todolist">
        <div className="col-xl-10 col-md-9 col-sm-8 col-7" >
      <MDBInput className=" textinput ml-5 pl-5" label="Add Todos"  size="lg" onChange={(event)=>{this.setState({search:event.target.value})}} value={this.state.search} onKeyPress={this.submitForm} required />
      </div>
      <div className="col-xl-2 col-md-3 col-sm-4 col-5">
      <MDBBtn className="mt-3 ml-5" color="success" onClick={this.submitForm}>Submit</MDBBtn>
      </div>
      </div>
      {this.state.todos}
      </div>
  )
}
}
export default Search;