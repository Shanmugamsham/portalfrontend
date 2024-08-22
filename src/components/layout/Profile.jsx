import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import createusercontextdata from '../../context/Usercontext';

const Profile = () => {
    const {  myprofile, deleteuser,avatarPreview, setisloading}=useContext(createusercontextdata)

   


    return (
        <div>
               <div className="row justify-content-around mt-5 user-info">
            <div className="col-12 col-md-3">
            { myprofile.avatar? <figure className='avatar avatar-profile'>
                    {   
                        <img className="rounded-circle img-fluid" src={myprofile.avatar} alt='' /> }
                </figure>:<figure className='avatar avatar-profile'>
                    {   
                        <img className="rounded-circle img-fluid" src="images/default_avatar.png" alt='' /> }
                </figure>  }
                
                <Link to="/myprofile/update" id="edit_profile" className="btn btn-primary btn-block my-5">
                    Edit Profile
                </Link>
                <button onClick={ deleteuser} className="btn btn-primary btn-block mt-3">
                    Delete profile
                </button>
            </div>
    
            <div className="col-12 col-md-5">
                <h4>Full Name</h4>
                <p>{myprofile.name}</p>
    
                <h4>Email Address</h4>
                <p>{myprofile.email}</p>


            </div>
        </div>
        </div>
    );
};

export default Profile;