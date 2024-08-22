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
    
    
    const [isautheticate,setautheticate]=useState(false)
  
     const [profileformdate,setprofileform]=useState({})
     const [allprofileformdate,setallprofileform]=useState({})
     const [isupdate,setupdate]=useState(false)

     const [profilepasswordformdate,setprofilepasswordform]=useState({})
     const [isupdatepassword,setupdatepassword]=useState(false)
     
     
    const [allprofilslist,setallprofilelist]=useState([])
    
    const [myprofile2,setmyprofile2]=useState({
      id:"",
      name:"",
      email:"",
      password:"",
      avatar:""
    })
    
    const [myprofile,setmyprofile]=useState({
      id:"",
      name:"",
      email:"",
      password:"",
      avatar:""
    })
   


    const [Updateid,setupdateid]=useState()



     const getprofile=async()=>{

       try {
            setisloading(true)
             const token=  localStorage.getItem("token")
           const {data}= await axios.get(`https://portalbackend-x872.onrender.com/api/user`,{headers:{
             "token":token
         },})
         console.log(data);
         setmyprofile({...myprofile,name:data.data[0].name,password:data.data[0].password,email:data.data[0].email
          ,avatar:data.data[0].avatar,id:data.data[0].id
        })

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
    //       getprofile()
    //      },[])





    const getallprofile=async()=>{

        try {
             setisloading(true)
              const token=  localStorage.getItem("token")
            const {data}= await axios.get(`https://portalbackend-x872.onrender.com/api/users`,{headers:{
              "token":token
          },})
          setallprofilelist(data.data)
          setavatarPreview(data.data[0].avatar)
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
        console.log("gettprofilecalle");
        
        const token=  localStorage.getItem("token")
        const formData = new FormData();
        formData.append('name', myprofile.name)
        formData.append('email', myprofile.email)
        formData.append('password',myprofile.password)
        formData.append('avatar', avatar);
      
        const config = {
            headers: {
               "token":token,
            }}



        try {
        
            setupdate(true)
            setisloading(true)
            
          const {data}= await axios.put(`https://portalbackend-x872.onrender.com/api/userupdate`,formData, config)
        
        getprofile()
        navigate("/myprofile")
        toast.success(data.message, {
            position:"bottom-center",
            theme:"dark",
            });
            setprofileform({...profileformdate,name:"",password:"",email:"",})
         setavatarPreview("/images/default_avatar.png")
         setavatar("")
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
                await getprofile()
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


            const formData = new FormData();
            formData.append('name', userregisterdata.name)
            formData.append('email', userregisterdata.email)
            formData.append('password', userregisterdata.password)
            formData.append('avatar', avatar);
          
            const config = {
                headers: {
                    'Content-type': 'multipart/form-data'
                }}

            try {
                setisloading(true)
               const {data}= await axios.post(`https://portalbackend-x872.onrender.com/api/register`,formData, config)
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
            
            const deletealluser=async(id)=>{
     
                try {
                    setisloading(true)
                    const token=  localStorage.getItem("token")
                    const {data}= await axios.delete(`https://portalbackend-x872.onrender.com/api/useralldelete/${id}`,{headers:{
                      "token":token
                  },})
                  console.log(data);
                   navigate("/")
                   await getallprofile()
                  toast.success(data.message, {
                    position:"bottom-center",
                    theme:"dark",
                    });
                  setisloading(false)
                 } catch (error) {
                  setisloading(false)
                  toast.error(error.response.data.data, {
                      position:"bottom-center",
                      theme:"dark",
                      });
                  console.log(error);
                  
                 }
            
            }
               
            

            const getprofileid=async(id)=>{

                try {
                     setisloading(true)
                      const token=  localStorage.getItem("token")
                    const {data}= await axios.get(`https://portalbackend-x872.onrender.com/api/alluser/${id}`,{headers:{
                      "token":token
                  },})
                  console.log(data.data);
                  setmyprofile2({...myprofile2,name:data.data[0].name,password:data.data[0].password,email:data.data[0].email
                    ,avatar:data.data[0].avatar,id:data.data[0].id
                  })
                  setavatarPreview(data.data[0].avatar)
                  navigate("/allprofileedit")
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


          const getallprofileupdate=async(e)=>{

            e.preventDefault()
            const token=  localStorage.getItem("token")
            const formData = new FormData();
            formData.append('name', myprofile2.name)
            formData.append('email', myprofile2.email)
            formData.append('password',myprofile2.password)
            formData.append('avatar', avatar);

            const config = {
                headers: {
                   "token":token,
                }} 
            try {
            
                setupdate(true)
                setisloading(true)
                
              const {data}= await axios.put(`https://portalbackend-x872.onrender.com/api/usersallupdate/${Updateid}`,formData, config)
            
              navigate("/")
              await  getallprofile()
              setallprofileform({...allprofileformdate,name:"",password:"",email:"",})
            toast.success(data.message, {
                position:"bottom-center",
                theme:"dark",
                });
             setavatarPreview("/images/default_avatar.png")
             setavatar("")
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


            
            
            
            



    return (
        <div>
            <createusercontextdata.Provider value={{setkeyword,avatarPreview, myprofile,isautheticate,logoutHandler,
               email,setemail,password,setpassword,login,isloading,isupdatepassword,profilepasswordformdate,
               setprofilepasswordform,profileformdate,setprofileform,isupdate,
               setupdate,getprofileupdate,setavatarPreview,setavatar,userregisterdata,setuseregisterdata,register,
               avatar,getallprofile,allprofilslist, deleteuser,setisloading,deletealluser,setmyprofile2,myprofile2,
               getprofileid,allprofileformdate,setallprofileform, getallprofileupdate,Updateid,setupdateid,setmyprofile,
            }}>
            <ToastContainer theme="dark"/>     
                     {children}
            </createusercontextdata.Provider>
        </div>
    );
};

export default Usercontextproviderproducts;