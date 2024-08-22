import React, { useContext, useState } from 'react';
import createusercontextdata from '../../context/Usercontext';
import { Link } from 'react-router-dom';

const Allprofileedit = () => {
    const {profileformdate,setprofileform,isupdate,allprofileformdate,setallprofileform,
        getallprofileupdate,Updateid,setupdateid ,setupdate,getprofileupdate,setavatarPreview,setavatar,avatarPreview,myprofile2, myprofile}=useContext(createusercontextdata)
           
           
           
            const[avatarPreview2,setavatarPreview2]=useState("")
            const handleinputchange=(e)=>{
   
        if(e.target.name=="avatar"){
          const reader=new FileReader()
       reader.onload=()=>{
        if(reader.readyState==2){
          setavatarPreview2(reader.result)
          setavatar(e.target.files[0])
        }
       }
          reader.readAsDataURL(e.target.files[0])
    
        }
        else{
          const {name,value}=e.target
          setallprofileform({...allprofileformdate,[name]:value})
          setupdateid(myprofile2[0].id)
       
        }
        
    }

    return (
        <div>
             <div className="container-container-fluid">
       <div className="row wrapper">
                <div className="col-10 col-lg-5">
                    <form className="shadow-lg" onSubmit={getallprofileupdate} encType='multipart/form-data'>
                        <h1 className="mt-2 mb-5">Update Profile</h1>
                        <div className="form-group">
                            <label htmlFor="email_field">Name</label>
                            <input 
								type="name" 
								id="name_field" 
								className="form-control"
                                name='name'
                                placeholder={myprofile2[0].name}
                                value={allprofileformdate.name}
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
                                placeholder={myprofile2[0].email}
                                value={allprofileformdate.email}
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
                               value={allprofileformdate.password}
                               placeholder={myprofile2[0].password}
                                onChange={handleinputchange}
                                required={true}
                                
                            />



                        <div className='form-group'>
                            <label  htmlFor='avatar_upload'>Avatar</label>
                            <div className='d-flex align-items-center'>
                                <div>
                                   
                                   {myprofile2[0].avatar&&!avatarPreview2?  <figure className='avatar mr-3 item-rtl'>
                                        <img
                                           src={myprofile2[0].avatar}
                                            className='rounded-circle'
                                            alt='No Image'
                                        
                                        />
                                    </figure>:  <figure className='avatar mr-3 item-rtl'>
                                        <img
                                           src={avatarPreview2}
                                            className='rounded-circle'
                                            alt='Avatar Preview'
                                        
                                        />
                                    </figure>}
                                  
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

                        <button  disabled={isupdate}  type="submit"  className="btn update-btn btn-block mt-4 " >Update</button>
                        <Link to={"/"} className="btn " id="login_btn">Cancel</Link>
                    </form>
                </div>
            </div>
        
    </div>
        </div>
    );
};


export default Allprofileedit;