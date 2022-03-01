import React from 'react';

const Footer = () => {
    return ( 


<footer id ="ft" className="page-footer font-small bg-dark text-light pt-4">

  <div className="container text-center text-md-left">

    <div className="row text-center text-md-left mt-3 pb-3">
 
        
      {/* <!-- Grid column --> */}
      <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
        <h6 className="text-uppercase mb-4 font-weight-bold">Company name</h6>
        <p>Here is the Software Development Company 
          <strong > Junaid7042.</strong>
             </p>
      </div>
      {/* <!-- Grid column --> */}

      {/* <hr className="w-100 clearfix d-md-none"> */}

      {/* <!-- Grid column --> */}
      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
        <h6 className="text-uppercase mb-4 font-weight-bold">Services</h6>
        <p>
          <p href="#!">Desktop App  </p>
        </p>
        <p>
          <p href="#!">C {"&"} C++ Programming </p>
        </p>
        <p>
          <p href="#!">WireFrame</p>
        </p>
        <p>
          <p href="#!">App Testing</p>
        </p>
      </div>
      {/* <!-- Grid column --> */}

      {/* <hr className="w-100 clearfix d-md-none"> */}

     {/* /  <hr className="w-100 clearfix d-md-none"> */}

      {/* <!-- Grid column --> */}
      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
        <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
        <p>
          <i className="fas fa-home mr-3"></i>Multani Colony Near Baghbanpura Lahore, Pakistan</p>
        <p>
          <i className="fas fa-envelope mr-3"></i> hashmijunaid41@gmail.com</p>
        <p>
          <i className="fas fa-phone mr-3"></i> +92 306 6118092</p>
        
      </div>
      {/* <!-- Grid column --> */}

    </div>
    {/* <!-- Footer links --> */}

    {/* <hr> */}
    <hr className="border border-danger" ></hr>


    {/* <!-- Grid row --> */}
    <div className="row d-flex align-items-center">

      {/* <!-- Grid column --> */}
      <div className="col-md-7 col-lg-8">

        {/* <!--Copyright--> */}
        <p className="text-center text-md-left">© 2021 Copyright:
         
            <strong> Junaid7042</strong>
       
        </p>

      </div>
      {/* <!-- Grid column --> */}

      {/* <!-- Grid column --> */}
      <div className="col-md-5 col-lg-4 ml-lg-0">

        {/* <!-- Social buttons --> */}
        <div className="text-center text-md-right">
          <ul className="list-unstyled list-inline">
            <li className="list-inline-item">
              <a className="btn-floating btn-sm rgba-white-slight mx-1">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-sm rgba-white-slight mx-1">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-sm rgba-white-slight mx-1">
                <i className="fab fa-google-plus-g"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-sm rgba-white-slight mx-1">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>

      </div>
      {/* <!-- Grid column --> */}

    </div>
    {/* <!-- Grid row --> */}

  </div>
</footer>
        
     );
}
 
export default Footer;