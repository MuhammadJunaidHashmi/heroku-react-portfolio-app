import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import Card from "./Card";

const Services = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
loadService();
  }, []);

  const loadService = async () => {
    const result = await axios.get("https://junaid7042.herokuapp.com/service");
    setService(result.data.reverse());

  };
  return (
    <div className="container">
<div style={{display: "flex", justifyContent: "right",}}>
<Link  to="/services/add-service"  >

        <button className="btn btn-danger btn-sm" ><i className="fa fa-plus"></i>  And new Service</button>
    
</Link>
</div>
      <h1 style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
        <strong>IT'S TIME TO START YOUR </strong>
      </h1>

      <h1 style={{ display: "flex", justifyContent: "center" }}>
        <strong>WORK</strong>
      </h1>
      <hr  className="w-25 border border-danger"></hr>

      <p className="w-75 container">
        Hi there,I’m Junaid. I’ve over 3 years of experience in programming
        languages such as c, c++, c#, java, SQL etc. Expertise in web
        development and also designing wireframe in balsamiq tool. Moreover i
        have a small team to create animated lyrics videos. My first objective
        is to provide 100% quality work to the clients.
      </p>

      <br></br>
      <br></br>
      <br></br>
    
     
      {service.map((serv) => (


<Card data={serv}> </Card>

      ))}
      </div>
   

  );
};

export default Services;
