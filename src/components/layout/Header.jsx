import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import createusercontextdata from '../../context/Usercontext';
import {DropdownButton, Dropdown, Image} from 'react-bootstrap';
const Header = () => {
  const {setkeyword,avatarPreview, myprofile,isautheticate,logoutHandler,getallproducts,setallprofile,getallprofile}=useContext(createusercontextdata)
  const navigate=useNavigate()
  const clearKeyword = () =>{
    setkeyword("");
}
    return (
        <div>
             <nav className="navbar row">
      <div className="col-12 col-md-3">
        <div className="navbar-brand">
          <Link to={"/"} onClick={clearKeyword} >
          <img width="80px" src="/images/socialjob.png" />
          </Link>
        </div>
      </div>
      <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
       {
        isautheticate?<div> 
           <Link to={"/"} className="btn " id="login_btn"><button onClick={getallprofile}className="btn " id="login_btn">All Users</button></Link>
        
        <Dropdown className='d-inline' >
        <Dropdown.Toggle variant='default text-white pr-5' id='dropdown-basic'>
          <figure className='avatar avatar-nav'>
            <Image width="50px" src={avatarPreview}  />
          </figure>
          <span>{myprofile[0].name}</span>
        </Dropdown.Toggle>
        <Dropdown.Menu>
        <Dropdown.Item onClick={() => {navigate('/myprofile')}} className='text-dark'>Profile</Dropdown.Item>
         {/* <Dropdown.Item onClick={() => {navigate('/orders')}} className='text-dark'>Orders</Dropdown.Item> */}
        <Dropdown.Item onClick={logoutHandler} className='text-danger'>Logout</Dropdown.Item>
                  </Dropdown.Menu>
    </Dropdown></div> :
    <div>
        <Link to={"/Register"} className="btn m-2" id="login_btn">Singup</Link>
        <Link to={"/login"} className="btn m-2" id="login_btn">Login</Link>
    </div>
       }
      </div>
    </nav>
      </div>
    );
};

export default Header;