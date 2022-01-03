import axios from "axios";

import {Link,useHistory} from "react-router-dom";
import React, { useState, useEffect } from "react";

const Card = (props) => {
  let history = useHistory();

  const [service, setService] = useState([]);

  useEffect(() => {
   
loadService();

  }, []);
  const loadService = async () => {
    const result = await axios.get("https://junaid7042-api.herokuapp.com/api/service");
    setService(result.data);

  };

const deleteService  = async id =>{
 
  await axios.delete(`https://junaid7042-api.herokuapp.com/api/service/${id}`);
  
  history.push("/");
  history.push("/services");
}
    return ( 
           <div className=" w-75 container" style={{ marginTop: 40 }}> 

  <div className="card " >
  <a href={props.data.redirect} target="_blank">
  
    <img style={{height:400}} src={props.data.source} className="  card-img-top" alt="...">
    </img>
    </a><div className="card-body">
      
      <h5 className="card-title">{props.data.title}</h5>
      <p className="card-text">{props.data.discription}</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated {props.data.updateDate}</small>
   
      <div className="containers">      <Link to={`/services/edit-service/${props.data.id}`} className=' btn btn-warning' ><i className="fa fa-edit"></i> </Link>


<Link onClick={()=> deleteService(props.data.id)} style={{marginRight: 15,}} className=' btn btn-danger' ><i className="fa fa-trash"></i></Link>

      
</div>
<p> <b>Author:</b> {props.data.address}, IP address: <a href="#"><u>{props.data.ip}</u></a></p>
    </div>
  </div>


      {/* <div className="card" style={{width: 600, marginRight:20, marginLeft: 250 ,marginTop: 20}}>
      <a href={props.data.redirect} target="_blank">
  
    <img style={{height: 350}} className="card-img-top" src={props.data.source} alt="Card image cap">
        </img>
        </a>
    <div className="card-body">
    <Link to={`/services/edit-service/${props.data.id}`} className='btn btn-warning' style={{marginLeft: 400,marginRight: 30, width: 50}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-card-text" viewBox="0 0 16 16">
  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
  <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
</svg> </Link>


<Link onClick={()=> deleteService(props.data.id)} className='btn btn-danger' style={{width: 50}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg></Link>
    
      <h5 className="card-title"> {props.data.title} </h5>
      <p className="card-text">{props.data.discription}</p>
      <p className="card-text"><small className="text-muted">Last updated {props.data.updateDate} </small></p>
    </div>
  </div> */}
  </div>
  
     );
}
 
export default Card;