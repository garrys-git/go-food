import React from "react";
import {Link} from "react-router-dom";

const styleFooter={
  backgroundColor: "#333",
  color: "#fff",
  
  padding: "20px 0",
  textAlign: "center"
}

const styleFooterContent={
  display:"flex",
  justifyContent:" center",
  alignItems: "center"

}

function Footer() {
  return (<div> 
  <br></br>
  <br></br>
  <br></br>
  <footer style={styleFooter} className="bg-success">
      <div style={styleFooterContent} className="fs-5">
      
         <p>&copy; 2024 GoFood. All rights reserved.</p> 
      </div>
    </footer>
  </div>);
}
export default Footer;



{/* <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
  <div className="col-md-4 d-flex align-items-center">
    <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">    </Link> */}
    {/* <span className="mb-3 mb-md-0 text-muted">© 2024 GoFood, Inc</span> */}
/*     <div className="text-center mb-3  p-3 mb-md-0 text-muted ml-50%" style={{"backgroundColor": "rgba(0, 0, 0)"}}>
  
    <a className="text-body" href="http://localhost:3000/">© 2024 GoFood</a>
  </div>
  </div>
  </footer>  */
 {/*  <footer className="bg-body-tertiary text-center text-lg-start">
  ---Copyright---
  <div className="text-center p-3" style={{"backgroundColor": "rgba(0, 0, 0)"}}>
  
    <a className="text-body" href="http://localhost:3000/">© 2024 GoFood</a>
  </div>
  ---Copyright---
</footer> */}
