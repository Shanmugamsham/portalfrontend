import React, { useContext } from 'react';
import createusercontextdata from '../../context/Usercontext';
import Loading from './Loading';
import { Link, useNavigate } from 'react-router-dom';
const Home = () => {
    
   const {isloading,allprofilslist,avatarPreview, getprofileid, myprofile,setisloading,deletealluser, getallprofile}=useContext(createusercontextdata)
   
  


         
  
    return (
       <>
  
       {isloading?<Loading/>:
        <div className='container mt-5 '>
          <div className='row'>
       {allprofilslist&&allprofilslist.map((result,index)=>(
        <div className='col-12 col-md-4 text-center mb-5 mt-2' key={index}>
           <div className='text-center'>
          {result.avatar? <img src={ result.avatar}
              className='rounded-circles "'
              alt='Avatar Preview'
                          />:<img src="/images/default_avatar.png"
                          className='rounded-circles "'
                          alt='Avatar Preview'
                                      />}
            </div>
          <h1 className='resulheading'>USER ID :  {result.id} .</h1>
          <p className='resultparagraph'>NAME :  {result.name} .</p>
          <p className='resultparagraph'>EMAIl ID:  {result.email} .</p>
          <div className='d-flex flex-row justify-content-center'>
          
          <button onClick={()=>getprofileid(result.id)} id="edit_profile" className="btn btn-primary m-1 ">Edit Profile</button>
                    
                
                <button  onClick={()=>deletealluser(result.id)} className="btn btn-primary m-1">
                    Delete profile
                </button>
                </div>

        </div>
      
       ))}  
       </div>
       </div>
      };
      </>
    );
  }

export default Home;