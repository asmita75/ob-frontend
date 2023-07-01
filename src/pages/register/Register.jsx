import axios from "axios";
import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { registerApi } from "../../apis/Api";
const Register = () =>{

  const [fname, setFname]= useState('');
  const [lname, setLname]= useState('');
  const [email, setEmail]= useState('');
  const [pass, setPass]= useState('');
  const [pass2, setPass2]= useState('');

  //error state
  const [fnameError, setFnameError]=useState("");
  const [lnameError, setLnameError]=useState("");
  const [emailError, setEmailError]=useState("");
  const [passError, setPassError]= useState("");
  const [pass2Error, setPass2Error]= useState("");

  const validate =()=>{
    let isvalid =true;
    if(fname === ""){
      setFnameError("Firstname is required");
      isvalid=false;
    }
    if(lname === ""){
      setLnameError("Lastname is required");
      isvalid=false;
    }

    if(email === ""){
      setEmailError("Email is required");
      isvalid=false;
    }

    if(pass === ""){
      setPassError("Password is required");
      isvalid=false;
    }
    if(pass2 === ""){
      setPass2Error("Confirm password is required");
      isvalid=false;
    }

    if(pass !== pass2){
      setPass2Error("password doesn't match");
      isvalid=false;
    }
    return isvalid;
  }

 

  const handleFname =(e)=>{
    setFname(e.target.value);
  }

  const handleLname =(e)=>{
    setLname(e.target.value);
  }

  const handleEmail =(e)=>{
    setEmail(e.target.value);
  }

  const handlePass =(e)=>{
    setPass(e.target.value);
  }

  const handlePass2 =(e)=>{
    setPass2(e.target.value);
  }

  //handle asubmit
  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(fname, lname, email, pass, pass2);

    if(!validate()){
      return;
    }

    try{
      registerApi({
        fname: fname,
        lname: lname,
        email: email,
        password: pass,
        password2: pass2  
      }).then((res)=>{
        toast.success("user register successfully");
      }).catch((err)=>{
        console.log((err)=>{
          console.log(err);
          toast.error("user registration failed");
        });
        });
      }catch(error){
        toast.error("registration cafiled");
      
      }
    }

  //  try{
  //   axios.post('http://localhost:5000/api/user/register',{
  //     fname: fname,
  //     lname: lname,
  //     email: email,
  //     password: pass,
  //     password2: pass2
  //   }).then ((res) => {
  //     toast.success('user registered successfully');
  //   }).catch((err) =>{
  //   toast.error("user registraion failed");
  //  });
  //   // console.log("success"); 
  // }catch (error){
  //   toast.error("error in frontend");
  // }
  //}
  return (
    <div className="container">
      <div className="col-md-5"> 
        <h1>Register a user</h1>

        <form action="">
          <div className="form-group">
            <label htmlFor="name">Firstname</label>
            <input 
            onChange={handleFname}
            type="text" name="name" id="name" className="form-control"
             />
            {
              fnameError && <div className="text-danger">{fnameError}</div>
            }
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Lastname</label>
            <input
            onChange={handleLname}
              type="text"
              name="lastname"
              id="lastname"
              className="form-control"
            />
            {
              lnameError && <div className="text-danger">{lnameError}</div>
            }
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
            onChange={handleEmail}
              type="email"
              name="email"
              id="email"
              className="form-control"
            />
            {
              emailError && <div className="text-danger">{emailError}</div>
            }
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
            onChange={handlePass}
              type="password"
              name="password"
              id="password"
              className="form-control"
            />
            {
              passError && <div className="text-danger">{passError}</div>
            }
          </div>
          <div className="form-group">
            <label htmlFor="password2">Confirm Password</label>
            <input
            onChange={handlePass2}
              type="password"
              name="password2"
              id="password2"
              className="form-control"
            />
            {
              pass2Error && <div className="text-danger">{pass2Error}</div>
            }
          </div>
          <button type="submit" className="btn btn-primary mt-3 w-100"
          onClick={handleSubmit}
          >
            Register
          </button>
        </form>
        <p>
          Already have account? <Link to= "/login">Login</Link>
        </p>
      </div>
    </div>
  );
};
export default Register;