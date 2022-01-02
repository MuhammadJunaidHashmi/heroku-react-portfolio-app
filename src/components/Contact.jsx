import React from 'react';


const Contact = () => {
    return ( <div>
        
       
    <div >
 

        <div className="row justify justify-content-center ">
       
            <div className="col-11 col-md-8 col-lg-6 col-xl-5">
                <form className="" onsubmit="event.preventDefault()">
                    <div className="">
                        <div className="row mt-0">
                            <div className="col-md-12 ">
                                <h1 className=" row justify justify-content-center">Contact Us</h1>
                                <br></br>
                                <br></br>

                                <p>Use the form below to share your questions, ideas, comments and feedback</p>
                            </div>
                        </div>
                        <div className="form-group row mb-3">
                            <div className="col-md-12 mb-0">
                                <p className="mb-1">Email</p>
                                 <input id="e-mail" type="text" placeholder="Enter your email" name="email" className="form-control input-box rm-border">
                                     </input>
            
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-12 mb-2">
                                <p className="mb-1">Message</p> <textarea id="message" type="text" placeholder="Enter your message" name="message" className="form-control input-box rm-border"></textarea>
                            </div>
                        </div>
                        <div className="form-group row justify-content-center mb-0">
                            <div className="col-md-12 px-3">
                                 <input type="submit" value="Submit" className="btn btn-block btn-purple rm-border text-light bg-dark ">
                                      </input>
                                      </div>
        
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    </div> );
}
 
export default Contact;