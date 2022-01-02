import React from "react";

const About = () => {
  return (
    <div className="container">
      <h2 style={{ marginTop: 30 }}>
        Profile
        <br></br>
        <hr></hr>
      </h2>

      <div className="containers">
       

        <h3 className="text">
          <h3 className="text">
            <h3 className="text">
              Junaid hashmi
              <br></br>
              <p style={{ fontSize: 15, marginTop: 20 }} className="text">
                Hi there,I'm Junaid. I've over 3 years of experience in
                programming languages such as c, c++, c#, java, SQL etc.
                Expertise in web development. My first objective is to provide
                100% quality work to the clients.
              </p>
            </h3>
            Education
            <br></br>
            <p style={{ fontSize: 15, marginTop: 20 }} className="text">
              B.Sc. - Sofware Engineering COMSATS University, Pakistan,
              Graduated 2020
            </p>
          </h3>
          Certifications
          <br></br>
          <p style={{ fontSize: 15, marginTop: 20 }} className="text">
            Vs Certifide
            <br></br>
            Visual Studio 2019
            <br></br>
            UI Wireframe
            <br></br>
            balsamic 2020
            <br></br>
            React Native
            <br></br>
            Comsats lahore 2020
          </p>
        </h3>
        <div className="image">
          <img
            className="smaller-image thick-green-border"
            src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/cf42fec2c175e6791540a40a34804322-1606207863911/5af009cb-8b8d-431d-a295-23327c1f93c5.jpg"
            alt="Profile picture junaid7042."
          ></img>
        </div>
      </div>
    </div>
  );
};

export default About;
