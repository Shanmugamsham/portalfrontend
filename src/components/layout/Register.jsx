import React, { useContext, useRef, useState } from 'react';
import createusercontextdata from '../../context/Usercontext';

const Register = () => {
   
   const{userregisterdata,setuseregisterdata,register,avatar,setavatar,avatarPreview,setavatarPreview,isloading}= useContext(createusercontextdata)
   
  //  const [file,setfile]=useState()
  //  const [filename,setfilename]=useState("")
  // const fileinput=useRef()

   const handleinputchange=(e)=>{
   
    if(e.target.name=="avatar"){
      const reader=new FileReader()
   reader.onload=()=>{
    if(reader.readyState==2){
      setavatarPreview(reader.result)
      setavatar(e.target.files[0])
    }
   }
      reader.readAsDataURL(e.target.files[0])

    }
    else{
      const {name,value}=e.target
      setuseregisterdata({...userregisterdata,[name]:value})
    console.log(userregisterdata);
    }
}


//  const sivefile=()=>{
//     setfile(fileinput.current.file[0])
//     setfilename(fileinput.current.file[0].name)
//  }

//  const upload=()=>{
//   const formdata=new FormData()
//   formdata.append('file',file)
//   formdata
//  }

    return (
        <div>
             <div className="container container-fluid">
        <div className="row wrapper">
		<div className="col-10 col-lg-5">
        <form className="shadow-lg" onSubmit={register} encType='multipart/form-data'>
            <h1 className="mb-3">Register</h1>

          <div className="form-group">
            <label htmlFor="email_field">Name</label>
            <input type="name" id="name_field" className="form-control" name='name' value={userregisterdata.name} onChange={handleinputchange} required/>
          </div>

            <div className="form-group">
              <label htmlFor="email_field">Email</label>
              <input
                type="email"
                id="email_field"
                className="form-control"
                 name='email'
                value={userregisterdata.email} onChange={handleinputchange}
                required
              />
            </div>
  
            <div className="form-group">
              <label htmlFor="password_field">Password</label>
              <input
                type="password"
                id="password_field"
                className="form-control"
                 name='password'
                value={userregisterdata.password} onChange={handleinputchange}
                required
              />
            </div>

            <div className='form-group'>
              <label htmlFor='avatar_upload'>Avatar</label>
              <div className='d-flex align-items-center'>
                  <div>
                      <figure className='avatar mr-3 item-rtl'>
                          <img
                              src={avatarPreview}
                              className='rounded-circle'
                              alt='Avatar Preview'
                          />
                      </figure>
                  </div>
                  <div className='custom-file'>
                      <input
                        // ref={fileinput}
                          type='file'
                          name='avatar'
                          className='custom-file-input'
                          id='customFile'
                          onChange={handleinputchange}
                      />
                      <label className='custom-file-label' htmlFor='customFile'>
                          Choose Avatar
                      </label>
                  </div>
              </div>
          </div>
  
            <button
              id="register_button"
              type="submit"
              className="btn btn-block py-3"
              disabled={isloading}
            >
              REGISTER
            </button>
          </form>
		  </div>
    </div>
</div>
        </div>
    );
};

export default Register;