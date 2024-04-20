import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Signup() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });
  const handleChange=(event)=>{
    setCredentials({...credentials,[event.target.name]:event.target.value});
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation}),
    });
    const json=await response.json();
    console.log(json);
    if(!json.success)
    {
      alert("Enter Valid Credentials");
    }
    else 
    {
      alert("Details Saved Successfully");
    }
  };
  return (<> <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              onChange={handleChange}
              type="text"
              className="form-control"
              name="name"
              value={credentials.name}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              onChange={handleChange}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={credentials.email}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              onChange={handleChange}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={credentials.password}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Address
            </label>
            <input
              onChange={handleChange}
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              name="geolocation"
              value={credentials.geolocation}
            />
          </div>

          <button type="submit" className="m-3 btn btn-success" >
            Submit
          </button>
          <Link to="/login" className="m-3 btn btn-danger">
            Aldready A User
          </Link>
        </form>
      </div>
    </>
  );
}
