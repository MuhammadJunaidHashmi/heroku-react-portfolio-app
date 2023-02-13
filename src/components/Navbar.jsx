import React from "react";
import { Link, NavLink} from "react-router-dom";
import { useState } from "react";
//import Gal from "./Gal";

function Navbar() {
 
  return (
    <div   >

      <nav  class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark" >
        <Link className="navbar-brand text-danger Stl"  style={{marginRight: 100}} to="/">
          Junaid7042
        </Link>
        
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>



        <div class=" collapse navbar-collapse show" id="navbarColor01">
          <ul class=" navbar-nav mr-auto  ">
            <li class="nav-item  px-md-2"
            
           
            >
              <NavLink class=" nav-link  btn " exact to="/" 
               
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-expanded="true"
              >Home </NavLink>
              
            
            </li>
            <li class="nav-item px-md-2 ">
            <NavLink class="nav-link btn " exact to="/about"
            
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-expanded="true"
            >About </NavLink>
              
            </li>
            <li class="nav-item px-md-2">
            <NavLink class="nav-link btn"exact  to="/services"
            
            data-toggle="collapse"
            data-target="#navbarColor01"
            aria-expanded="true"
  
            >Services </NavLink>
               </li>
               <li class="nav-item px-md-2">
            <NavLink class="nav-link btn"exact  to="/projects"
                      data-toggle="collapse"
                      data-target="#navbarColor01"
                      aria-expanded="true"
            
            >Projects </NavLink>
               </li>
        
            <li class="nav-item px-md-2">
            <NavLink class="nav-link btn "exact  to="/contact-us"
                      data-toggle="collapse"
                      data-target="#navbarColor01"
                      aria-expanded="true"
            
            >Contact Us </NavLink>
              
            </li>
          </ul>
          <Link class="nav-link btn "exact  to="/login">
          <button class="btn btn-circle btn-sm btn-danger"><i className="fa fa-sign-in"
                    data-toggle="collapse"
                    data-target="#navbarColor01"
                    aria-expanded="true"
          
          ></i> login</button>
          </Link>
        </div>
      </nav>




    </div>


);
}
export default Navbar;

