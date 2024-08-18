import React, { useContext, useState } from 'react';
import createusercontextdata from '../../context/Usercontext';
import { Link } from 'react-router-dom';
import Loading from './Loading';


const Logindata = () => {

    
    const{email,setemail,password,setpassword,login,isloading}=useContext(createusercontextdata)
   
    
  

    return (
        <>
       {isloading? <Loading/>:<div className="container container-fluid">
        <div className="row wrapper"> 
		<div className="col-10 col-lg-5">
        <form onSubmit={login} className="shadow-lg">
            <h1 className="mb-3">Login</h1>
            <div className="form-group">
              <label htmlFor="email_field">Email</label>
              <input
                type="email"
                id="email_field"
                className="form-control"
                value={email}
                onChange={(e)=>setemail(e.target.value)}
                required
              />
            </div>
  
            <div className="form-group">
              <label htmlFor="password_field">Password</label>
              <input
                type="password"
                id="password_field"
                className="form-control"
                value={password}
                onChange={(e)=>setpassword(e.target.value)}
                required
              />
            </div>

            <Link to={"/forgotpassword"} href="#" className="float-right mb-4">Forgot Password?</Link>
  
            <button
              id="login_button"
              type="submit"
              className="btn btn-block py-3"
              disabled={isloading}
            >
              LOGIN
            </button>

            <Link to={"/register"} href="#" className="float-right mt-3">New User?</Link>
          </form>
		  </div>
    </div>
</div>}
        
</>
    );
};

export default Logindata;