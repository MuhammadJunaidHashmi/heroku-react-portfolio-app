import React from "react";
import Apple from '.././imgs/Apple.jpg';
function Heads() {
  return (
    <div
    
      className="p-5 text-center bg-image"
    

      style={{
        backgroundImage:
          `url(${Apple})`,
        height: 500,
      }}
    >
      <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6);" }}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <h5 style={{ marginTop: 100 }}>Programming Site {"{Code}"} </h5>
            <hr className="border border-danger" ></hr>
            
            <h1 style={{fontSize: 50}} className="mb-3">HIRE A FRELANCER</h1>
            <a
              className="btn btn-outline-light btn-lg  "
              href="/"
              role="button"
              target="_blank"
            >
             <i class="fa fa-header" title="hire and enjoy best service" ></i>ire
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Heads;
