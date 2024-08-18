import React, { useContext } from 'react';
import createusercontextdata from '../../context/Usercontext';

const Myprofilepassword = () => {
       
    const{isupdatepassword,profilepasswordformdate,setprofilepasswordform,getprofilepasswordupdate}=useContext(createusercontextdata)
    const handleinputchange=(e)=>{
          const {name,value}=e.target
          setprofilepasswordform({...profilepasswordformdate,[name]:value})
        console.log(profilepasswordformdate)
    }
    return (
        <div>
             <div className="container-container-fluid">
		<div className="row wrapper">
                <div className="col-10 col-lg-5">
                    <form className="shadow-lg" onSubmit={getprofilepasswordupdate}>
                        <h1 className="mt-2 mb-5">Update Password</h1>
                        <div className="form-group">
                            <label htmlFor="old_password_field">Old Password</label>
                            <input
                                type="password"
                                id="old_password_field"
                                className="form-control"
                                name='oldpassword'
                                value={profilepasswordformdate.oldpassword}
                                onChange={handleinputchange}
                                
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="new_password_field">New Password</label>
                            <input
                                type="password"
                                id="new_password_field"
                                name='newpasswordpassword'
                                className="form-control"
                               value={profilepasswordformdate.newpasswordpassword}
                                onChange={handleinputchange}

                            />
                        </div>

                        <button type="submit" disabled={isupdatepassword} className="btn update-btn btn-block mt-4 mb-3">Update Password</button>
                    </form>
                </div>
            </div>
        
    </div>
        </div>
    );
};

export default Myprofilepassword;