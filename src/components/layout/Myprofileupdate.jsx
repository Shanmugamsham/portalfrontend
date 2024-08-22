import React, { useContext } from 'react';
import createusercontextdata from '../../context/Usercontext';
import { useState } from 'react';

const Myprofileupdate = () => {
    const {profileformdate,setprofileform,setmyprofile,isupdate,setupdate,getprofileupdate,setavatarPreview,setavatar,avatarPreview, myprofile}=useContext(createusercontextdata)
    
    const [avatarshow,setshoavatarPreview]=useState("/images/default_avatar.png")
    
    const handleinputchange=(e)=>{
   
        if(e.target.name=="avatar"){
          const reader=new FileReader()
       reader.onload=()=>{
        if(reader.readyState==2){
         setshoavatarPreview(reader.result)
          setavatar(e.target.files[0])
        }
       }
          reader.readAsDataURL(e.target.files[0])
    
        }
        else{
          const {name,value}=e.target
          setmyprofile({...myprofile,[name]:value})
       
        }
    }

    return (
        <div>
             <div className="container-container-fluid">
       <div className="row wrapper">
                <div className="col-10 col-lg-5">
                    <form className="shadow-lg" onSubmit={getprofileupdate} encType='multipart/form-data'>
                        <h1 className="mt-2 mb-5">Update Profile</h1>

                        <div className="form-group">
                            <label htmlFor="email_field">Name</label>
                            <input 
								type="name" 
								id="name_field" 
								className="form-control"
                                name='name'
                                value={myprofile.name}
                                onChange={handleinputchange}
                                required={true}
                            />
                        </div>

                        <div className="form-group">
                            <label  htmlFor="email_field">Email</label>
                            <input
                                type="email"
                                id="email_field"
                                className="form-control"
                                name='email'
                               
                             
                                value={myprofile.email}
                                onChange={handleinputchange}
                                required={true}
                            />
                        </div>
                            
                       
                        <label htmlFor="new_password_field">Password</label>
                            <input
                                type="password"
                                id="new_password_field"
                                name='password'
                                className="form-control"
                               value={myprofile.password}
                                onChange={handleinputchange}
                                required={true}
                                
                            />



                        <div className='form-group'>
                            <label  htmlFor='avatar_upload'>Avatar</label>
                            <div className='d-flex align-items-center'>
                                <div>
                                    {<figure className='avatar mr-3 item-rtl'>
                                        <img
                                           src={avatarshow
                                           }
                                            className='rounded-circle'
                                            alt='Avatar Preview'
                                        
                                        />
                                    </figure>
                                    
    
                                    
                                    
                                    }
                                </div>
                                <div className='custom-file'>
                                    <input
                                        type='file'
                                        name='avatar'
                                        className='custom-file-input'
                                        id='customFile'
                                        onChange={handleinputchange}
            
                                    />
                                    <label className='custom-file-label'  htmlFor='customFile'>
                                        Choose Avatar
                                </label>
                                </div>
                            </div>
                        </div>

                        <button  disabled={isupdate}  type="submit"  className="btn update-btn btn-block mt-4 mb-3" >Update</button>
                    </form>
                </div>
            </div>
        
    </div>
        </div>
    );
};

export default Myprofileupdate;