import React, { useContext } from 'react';
import createusercontextdata from '../../context/Usercontext';
import Loading from './Loading';
const Home = () => {
    
   const {isloading,allprofilslist,avatarPreview}=useContext(createusercontextdata)
      
         
         
  
    return (
       <>
       {isloading?<Loading/>:
        <div className='container mt-5'>
          <div className='row'>
       {allprofilslist.map((result,index)=>(
        <div className='col-12 col-md-4 text-center' key={index}>
           <div className='text-center'>
           <img src={avatarPreview}
              className='rounded-circles "'
              alt='Avatar Preview'
                          />
            </div>
          <h1 className='resulheading'>USER ID :  {result.id} .</h1>
          <p className='resultparagraph'>NAME :  {result.name} .</p>
          <p className='resultparagraph'>EMAIl ID:  {result.email} .</p>
        

        </div>
      
       ))}  
       </div>
       </div>
      };
      </>
    );
  }

export default Home;