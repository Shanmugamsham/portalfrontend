import React from 'react';
import Home from '../components/layout/Home';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Logindata from '../components/layout/Logindata';
import Usercontextproviderproducts from './Usercontextproviderproducts';
import Register from '../components/layout/Register';
import Profile from '../components/layout/Profile';
import Myprofileupdate from '../components/layout/Myprofileupdate';
import Allprofileedits from '../components/layout/Allprofileedit';




const Frotendfilenav = () => {
    return (
        <div>
            <BrowserRouter>
            <Usercontextproviderproducts>
            <Header/>
            <Routes>
            <Route path='/header'element={<Header/>}/>
           <Route path='/' element={ <Home/>}/>
           <Route path='/login'element={<Logindata/> }/> 
           <Route path='/myprofile'element={<Profile/>}/>
           <Route path='/Register'element={<Register/>}/> 
           <Route path='/myprofile/update'element={<Myprofileupdate/>}/>
           <Route path='/allprofileedit'element={<Allprofileedits/>}/>
           <Route path='/footer'element={<Footer/>}/> 
           </Routes>
           </Usercontextproviderproducts>
           <Footer/>
          </BrowserRouter>
        </div>
    );
};

export default Frotendfilenav;