import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddNewService = () => {
  let history = useHistory();


  const [ips, setIPS] = useState([]);

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    console.log(res.data.state);
    setIPS(res.data);
  }
  
  useEffect( () => {
    //passing getData method to the lifecycle method
    getData();
  }, [])


  const [service, setService] = useState({
    redirect: "",
    source: "",
    title: "",
    updateDate: "1 min",
    discription: "",
    address: "",
    ip: "",
  });

  const { redirect, source, title, updateDate, discription,address,ip} = service;

   const onInputChange = (e) => {
    setService({ ...service, [e.target.name]: e.target.value });
   
  };

  const onSubmitBtn =  async (e) => {
    const current = new Date().toLocaleString();    
   setService({ ...service, updateDate: current,ip:ips.IPv4,address: `${ips.state}, ${ips.city}`});  
  };

  const onSubmit = async (e) => {

    e.preventDefault();
    await axios.post("https://junaid7042-api.herokuapp.com/api/service", service);
    history.push("/services");
   
  };
  return (
    <div>
      <div>
        <div className="row justify justify-content-center ">
          <div className="col-11 col-md-8 col-lg-6 col-xl-5">
            <form
              onSubmit={(e) => onSubmit(e)}
            
        
            >
              <div>
                <div className="row mt-0">
                  <div className="col-md-12 ">
                    <h1 className=" row justify justify-content-center">
                      Add New Service
                    </h1>
                    <br></br>
                    <br></br>
                  </div>
                </div>

                <div className="form-group row mb-3">
                  <div className="col-md-12 mb-0">
                    <p className="mb-1">Title</p>
                    <input
                      type="text"
                      placeholder="Enter Title of your service"
                      name="title"
                      value={title}
                      onChange={(e) => onInputChange(e)}
                      className="form-control input-box rm-border"
                      required
                    />
                  </div>
                </div>
                <div className="form-group row mb-3">
                  <div className="col-md-12 mb-0">
                    <p className="mb-1">Image URL</p>
                    <input
                      type="url"
                      value={source}
                      onChange={(e) => onInputChange(e)}
                      placeholder="Enter Image URL"
                      name="source"
                      className="form-control input-box rm-border"
                      required
                    ></input>
                  </div>
                </div>
                <div className="form-group row mb-3">
                  <div className="col-md-12 mb-0">
                    <p className="mb-1">Redirect URL</p>
                    <input
                      type="url"
                      value={redirect}
                      onChange={(e) => onInputChange(e)}
                      placeholder="Enter Redirect Url"
                      name="redirect"
                      className="form-control input-box rm-border"
                      required
                    ></input>
                    
                  </div>
                </div>
                <div className="form-group row mb-3    ">
                  <div className="col-md-12 mb-0">
                    <p className="mb-1">Description</p>
                    <input
                      type="text"
                      value={discription}
                      onChange={(e) => onInputChange(e)}
                      placeholder="Enter Description of your service"
                      name="discription"
                      className="form-control input-box rm-border"
                      required
                    ></input>
                  </div>
                </div>

               

                <div className="form-group row justify-content-center mb-0">
                  
               
                      
                  <div className="col-md-12 px-3">
                  
                                      <input 
                                      type = "submit"
                      className="btn btn-block btn-purple rm-border text-light bg-dark"
      
                      onClick={(e) => onSubmitBtn(e)}
                      
                      value="Save Service"
                    >
                      
                    </input>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewService;
