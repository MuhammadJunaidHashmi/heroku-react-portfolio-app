import React, { useState } from "react";
import { Link, NavLink} from "react-router-dom";

//import Gal from "./Gal";

function Navbar() {
 
const [classs,setClasss]=useState("collapse navbar-collapse show");
const [bools,setBools]=useState(false);

function onclickbtn(e)
  {
   
    setBools({ bools: !bools });
    if(bools)
    {
      setClasss({ classs: "collapse navbar-collapse show"});
    }
    else{
      setClasss({ classs: "collapse navbar-collapse" });
    }
    

  }
  return (
    <div   >

      <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark" >
        <Link className="navbar-brand text-danger Stl"  style={{marginRight: 100}} to="/">
          Junaid7042
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded={bools}
          aria-label="Toggle navigation"
          onClick={onclickbtn}
        >
          <span className="navbar-toggler-icon"></span>
        </button>



        <div  className={classs} id="navbarColor01">
          <ul className=" navbar-nav mr-auto  ">
            <li className="nav-item  px-md-2"
            
           
            >
              <NavLink className=" nav-link  btn " exact to="/" 
               
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-expanded={bools}
              >Home </NavLink>
              
            
            </li>
            <li className="nav-item px-md-2 ">
            <NavLink className="nav-link btn " exact to="/about"
            
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-expanded={bools}
            >About </NavLink>
              
            </li>
            <li className="nav-item px-md-2">
            <NavLink className="nav-link btn"exact  to="/services"
            
            data-toggle="collapse"
            data-target="#navbarColor01"
            aria-expanded={bools}
  
            >Services </NavLink>
               </li>
               <li className="nav-item px-md-2">
            <NavLink className="nav-link btn"exact  to="/projects"
                      data-toggle="collapse"
                      data-target="#navbarColor01"
                      aria-expanded={bools}
            
            >Projects </NavLink>
               </li>
        
            <li className="nav-item px-md-2">
            <NavLink className="nav-link btn "exact  to="/contact-us"
                      data-toggle="collapse"
                      data-target="#navbarColor01"
                      aria-expanded={bools}
            
            >Contact Us </NavLink>
              
            </li>
          </ul>
          <Link className="nav-link btn "exact  to="/login">
          <button className="btn btn-circle btn-sm btn-danger"><i className="fa fa-sign-in"
                    data-toggle="collapse"
                    data-target="#navbarColor01"
                    aria-expanded={bools}
          
          ></i> login</button>
          </Link>
        </div>
      </nav>




    </div>


);
}
export default Navbar;

