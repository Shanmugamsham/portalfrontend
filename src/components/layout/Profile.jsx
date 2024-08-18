import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import createusercontextdata from '../../context/Usercontext';

const Profile = () => {
    const {  myprofile, deleteuser}=useContext(createusercontextdata)
    return (
        <div>
               <div className="row justify-content-around mt-5 user-info">
            <div className="col-12 col-md-3">
                <figure className='avatar avatar-profile'>
                    { <img className="rounded-circle img-fluid" src={'./images/default_avatar.png'} alt='' /> }
                </figure>
                <Link to="/myprofile/update" id="edit_profile" className="btn btn-primary btn-block my-5">
                    Edit Profile
                </Link>
                <button onClick={ deleteuser} className="btn btn-primary btn-block mt-3">
                    Delete profile
                </button>
            </div>
    
            <div className="col-12 col-md-5">
                <h4>Full Name</h4>
                <p>{myprofile[0].name}</p>
    
                <h4>Email Address</h4>
                <p>{myprofile[0].email}</p>


            </div>
        </div>
        </div>
    );
};

export default Profile;