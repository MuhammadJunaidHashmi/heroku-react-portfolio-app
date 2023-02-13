import React  from "react";
import { Link, NavLink} from "react-router-dom";
//import Gal from "./Gal";

function Navbar() {


  return (
    <div   >





      <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark" >
        <Link className="navbar-brand text-danger Stl"  style={{marginRight: 100}} to="/">
          Junaid7042
        </Link>
        
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>



        <div className=" collapse navbar-collapse " id="navbarColor01">
          <ul className=" navbar-nav mr-auto  ">
            <li className="nav-item  px-md-2"
            
           
            >
              <NavLink className=" nav-link  btn " exact to="/" 
               
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-expanded="false"
              >Home </NavLink>
              
            
            </li>
            <li className="nav-item px-md-2 ">
            <NavLink className="nav-link btn " exact to="/about"
            
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-expanded="false"
            >About </NavLink>
              
            </li>
            <li className="nav-item px-md-2">
            <NavLink className="nav-link btn"exact  to="/services"
            
            data-toggle="collapse"
            data-target="#navbarColor01"
            aria-expanded="false"
  
            >Services </NavLink>
               </li>
               <li className="nav-item px-md-2">
            <NavLink className="nav-link btn"exact  to="/projects"
                      data-toggle="collapse"
                      data-target="#navbarColor01"
                      aria-expanded="false"
            
            >Projects </NavLink>
               </li>
        
            <li className="nav-item px-md-2">
            <NavLink className="nav-link btn "exact  to="/contact-us"
                      data-toggle="collapse"
                      data-target="#navbarColor01"
                      aria-expanded="false"
            
            >Contact Us </NavLink>
              
            </li>
          </ul>
          <Link className="nav-link btn "exact  to="/login">
          <button className="btn btn-circle btn-sm btn-danger"><i className="fa fa-sign-in"
                    data-toggle="collapse"
                    data-target="#navbarColor01"
                    aria-expanded="false"
          
          ></i> login</button>
          </Link>
        </div>
      </nav>




    </div>


);
}
export default Navbar;

