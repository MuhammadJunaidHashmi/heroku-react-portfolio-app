import React from 'react';
// s  
import { Link } from 'react-router-dom';

const AboutUs= () => {
    return ( <div>
        
        <div className="container bootstrap snippets bootdey">
<div className="row">
    {/* <!-- BEGIN USER PROFILE --> */}
    <div className="col-md-12">
      <div className="grid profile">
        <div className="grid-header">
            <div className='containers'>
        
          <div className="image" style={{marginTop: 50}}>
            <h3>Junaid hashmi</h3>
            <p>@junaid7042</p>
            <p>Software Engineer | React JS developer | Node.js (MERN) Developer | Freelancer</p>
            <p> Lahore, Pakistan</p>
          </div>
                {/*
          <img style={{width: 200,height: 200}}
            className=" thick-red-border"
            src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/cf42fec2c175e6791540a40a34804322-1606207863911/5af009cb-8b8d-431d-a295-23327c1f93c5.jpg"
            alt="Profile picture junaid7042."
          ></img>*/}
                 <img style={{width: 200,height: 200}}
            className=" thick-red-border"
            src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/98f1b6a397567036753e1832ba1d28b5-1679203797215/1c6f58fa-8bd9-45e1-bebd-899e79e8d921.png"
            alt="Profile picture junaid7042."
          ></img>
    
          </div>
          <div className="col-xs-3 text-right">

          </div>
        </div>
        <div className="grid-body">
         
      
            {/* <!-- BEGIN PROFILE --> */}
            <div>
              <p className="lead">My Profile</p>
              <hr>
          </hr>
              <div className="row">
                <div className="col-md-6">
                  <p><strong>Email:</strong> <a href="mailto:jwilliams@gmail.com">hashmijunaid41@gmail.com</a></p>
                  <p><strong>Website:</strong> <a href="http://localhost:3000/">junaid7042</a></p>
                  <p><strong>About:</strong> Web Developer / Mobile Developer</p>
                  <p><strong>Joined on:</strong> Feb 6 <sup>th</sup>, 2019</p>
                  <p><strong>Education:</strong> B.Sc. - Sofware Engineering, COMSATS University Islamabad Lahore Campus, Pakistan</p>
                
                  <p><strong>Skills:</strong> <span className="label label-primary">HTML</span>, <span className="label label-primary">CSS</span>, <span className="label label-primary">JAVASCRIPT</span>, <span className="label label-primary">JQUERY</span>, <span className="label label-primary">AJAX</span>, <span className="label label-primary">PHP</span>,  <span className="label label-primary">REACT</span>, <span className="label label-primary">C</span></p>
                </div>
                <div className="col-md-6">
                  <p><strong>Address:</strong> Shalimar Garden, Lahore, Pakistan</p>
                  <p><strong>Phone:</strong> (+92) 306-6118092</p>
                  <p><strong>Reputation:</strong> <span className="text-green"><i className="fa fa-angle-up"></i> 20+</span></p>
      </div>
              </div>
              <div className="row">
                <div className="col-sm-4 stats">
                  <h1>20K</h1>
                  <span>Followes</span>
                  <Link to="/">
                      <button className="btn btn-success"><i className="fa fa-plus-circle"></i> Follow</button>
               </Link>
                </div>
                <div className="col-sm-4 stats">
                  <h1>127</h1>
                  <span>Following</span>
                  <a href ="https://www.fiverr.com/junaid7042" target="_blank">
                  <button  className="btn btn-info"><i className="fa fa-user"></i> View Profile</button>
                  </a>
                </div>
                <div className="col-sm-4 stats">
                  <h1>100+</h1>
                  <span>Subscribers</span>
                  <Link to="/login">
                  <button className="btn btn-danger"><i className="fa fa-rss"></i> Subscribe</button>
                  </Link>
                </div>

              </div>
            </div>
            {/* <!-- END PROFILE --> */}
      
        </div>
      </div>
    </div>
    {/* <!-- END USER PROFILE --> */}
  </div>
</div>
    </div> );
}
 
export default AboutUs
