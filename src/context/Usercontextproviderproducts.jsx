import React from 'react';

import createusercontextdata from './Usercontext';
import { useContext,useState,useEffect } from 'react';
import axios from "axios"
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

const Usercontextproviderproducts = ({children}) => {
    const navigate=useNavigate()

    const[isloading,setisloading]=useState(false)
    const [keyword,setkeyword]=useState("")
 
    const[email,setemail]=useState("")
    const[password,setpassword]=useState("")
    const[userlogindata,setuserlogindata]=useState([])
  
    const [userregisterdata,setuseregisterdata]=useState({
        name:"",
        email:"",
        password:""
    })
    const[avatar,setavatar]=useState("")
    const[avatarPreview,setavatarPreview]=useState("/images/default_avatar.png")
    
    const [myprofile,setmyprofile]=useState([])
    const [isautheticate,setautheticate]=useState(false)
  
     const [profileformdate,setprofileform]=useState({})
     const [isupdate,setupdate]=useState(false)

     const [profilepasswordformdate,setprofilepasswordform]=useState({})
     const [isupdatepassword,setupdatepassword]=useState(false)
     
     
    const [allprofilslist,setallprofilelist]=useState([])
    
 
     const getprofile=async()=>{

       try {
            setisloading(true)
             const token=  localStorage.getItem("token")
           const {data}= await axios.get(`https://portalbackend-x872.onrender.com/api/user`,{headers:{
             "token":token
         },})
         console.log(data);
         setmyprofile(data.data)
        setautheticate(true)
           setisloading(false)
          } catch (error) {
            console.log(error);
            
           setautheticate(false)
           setisloading(false)
          toast.error(error.response.data.message, {
               position:"bottom-center",
              theme:"dark",
              });
          
          }
     
 }
    //  useEffect(()=>{
    //      getprofile()
    //     },[])





    const getallprofile=async()=>{

        try {
             setisloading(true)
              const token=  localStorage.getItem("token")
            const {data}= await axios.get(`https://portalbackend-x872.onrender.com/api/users`,{headers:{
              "token":token
          },})
          setallprofilelist(data.data)
         setautheticate(true)
            setisloading(false)
           } catch (error) {
             console.log(error);
             
            setautheticate(false)
            setisloading(false)
           toast.error(error.response.data.message, {
                position:"bottom-center",
               theme:"dark",
               });
           
           }
      
  }

  
   
    const getprofileupdate=async(e)=>{
        e.preventDefault()
        try {
        
            setupdate(true)
            setisloading(true)
            const token=  localStorage.getItem("token")
          const {data}= await axios.put(`https://portalbackend-x872.onrender.com/api/usersupdate`,{name:profileformdate.name,email:profileformdate.email,
            password:profileformdate.password,avatar:avatarPreview},{headers:{
            "token":token
        },})
        
        getprofile()

        toast.success(data.message, {
            position:"bottom-center",
            theme:"dark",
            });
        setprofileform({...profileformdate,name:"",email:"",avatar:"",password:""})
         setupdate(false)
          setisloading(false)
         } catch (error) {
            setupdate(false)
          setisloading(false)
          console.log(error.response);
        
          toast.error(error.response.data.message, {
              position:"bottom-center",
              theme:"dark",
              });
          
         }
     
    }





  
     

    
   
   
   

   
     const login=async(e)=>{
        e.preventDefault();
        try {
            setisloading(true)
           const {data}= await axios.post(`https://portalbackend-x872.onrender.com/api/login`,{email,password})
            localStorage.setItem('token',data.token);
            console.log(data.data);
            setuserlogindata(data.data)
             toast.success(data.message, {
                 position:"top-center",
                 theme:"light",
                });
                navigate("/")
                setemail("")
                setpassword("")
                getprofile()
             setisloading(false)
          } catch (error) {
           setisloading(false)
           console.log(error);
           toast.error(error.response.data.message, {
               position:"bottom-center",
               theme:"dark",
               });
          
         }
        }


    
    
        const register=async(e)=>{
              
            e.preventDefault();
            try {
                setisloading(true)
                
               const {data}= await axios.post(`https://portalbackend-x872.onrender.com/api/register`,{name:userregisterdata.name,
                email:userregisterdata.email,password:userregisterdata.password,avatar:avatarPreview})
                console.log(data);
                
                 toast.success(data.message, {
                     position:"top-center",
                     theme:"light",
                    });
                     navigate("/")
                     setuseregisterdata({...userregisterdata,name:"",password:"",email:"",})
                     setavatar("")
                     setavatarPreview("/images/default_avatar.png")
                 setisloading(false)
              } catch (error) {
               setisloading(false)
               console.log(error);

               if(error.response.data.data){
                toast.error("This email id is already Registered ", {
                    position:"bottom-center",
                    theme:"dark",
                    });
               }
              else{
                toast.error(error.response.data.message, {
                    position:"bottom-center",
                    theme:"dark",
                    });
              }

              
             }
            }



            const logoutHandler=async()=>{
     
                try {
                    setisloading(true)
                 
                   localStorage.removeItem('token');
                   setallprofilelist([])
                   navigate("/")
                  toast.success("Logout Successfully", {
                    position:"bottom-center",
                    theme:"dark",
                    });
                  setautheticate(false)
                  setisloading(false)
                 } catch (error) {
                  setautheticate(false)
                  setisloading(false)
                  toast.error("Logout failed", {
                      position:"bottom-center",
                      theme:"dark",
                      });
                  
                 }
            
            }
            
    
            const deleteuser=async()=>{
     
                try {
                    setisloading(true)
                    const token=  localStorage.getItem("token")
                    const {data}= await axios.delete(`https://portalbackend-x872.onrender.com/api/userdelete`,{headers:{
                      "token":token
                  },})
                  console.log(data);
                  
                   localStorage.removeItem('token');
                   setallprofilelist([])
                   navigate("/")

                  toast.success(data.message, {
                    position:"bottom-center",
                    theme:"dark",
                    });
                  setautheticate(false)
                  setisloading(false)
                 } catch (error) {
                  setautheticate(false)
                  setisloading(false)
                  toast.error(error.response.data.data, {
                      position:"bottom-center",
                      theme:"dark",
                      });
                  console.log(error);
                  
                 }
            
            }
            
            
            
            
            
            



    return (
        <div>
            <createusercontextdata.Provider value={{setkeyword,avatarPreview, myprofile,isautheticate,logoutHandler,
               email,setemail,password,setpassword,login,isloading,isupdatepassword,profilepasswordformdate,
               setprofilepasswordform,profileformdate,setprofileform,isupdate,
               setupdate,getprofileupdate,setavatarPreview,setavatar,userregisterdata,setuseregisterdata,register,
               avatar,getallprofile,allprofilslist, deleteuser
            }}>
            <ToastContainer theme="dark"/>     
                     {children}
            </createusercontextdata.Provider>
        </div>
    );
};

export default Usercontextproviderproducts;