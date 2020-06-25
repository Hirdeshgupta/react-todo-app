import React from "react";
import { MDBJumbotron, MDBContainer } from "mdbreact";
const Header = () => {
  return (
      <div>
    <MDBJumbotron className="mb-0 " style={{background:"rgb(51, 51, 51)",color:"white",fontWeight:"bold"}}>
      <MDBContainer >
        <h2 style={{fontWeight:"bold",fontSize:"3rem"}} className=" text-center">Todo List</h2>
      </MDBContainer>
    </MDBJumbotron>
    </div>
  )
}

export default Header;