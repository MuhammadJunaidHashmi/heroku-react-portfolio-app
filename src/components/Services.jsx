import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link} from "react-router-dom";
import useFullPageLoader from ".././hooks/useFullPageLoader";
import Card from "./Card";

const Services = () => {
  const [service, setService] = useState([]);
  const [loader, showLoader, hideLoader] = useFullPageLoader();

  useEffect(() => {
loadService();
  }, []);

  const loadService = async () => {
    showLoader();
    const result = await axios.get("https://junaid7042-api.herokuapp.com/api/service");
    setService(result.data.reverse());
    hideLoader();

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
       Hi, I'm Junaid Hashmi, a creative full stack web developer. I've over 4 years of experience in Programming Languages such as C, C++, C#, Java, Ruby, SQL etc. Expertise in Web Dev ( MERN & MEAN Stack, ROR , React JS, WordPress) , Mobile Dev (Reactnative). My first objective is to provide 100% quality work to the clients.
      </p>

      <br></br>
      <br></br>
      <br></br>
    
      <div style={{display: "flex", alignItems: "center",justifyContent: "center" }}> {loader}</div>
      {service.map((serv) => (


<Card data={serv}> </Card>

      ))}
       
      </div>
   

  );
};

export default Services;
