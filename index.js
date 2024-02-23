import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import {BrowserRouter,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Cc1 from './Class_Comp/Cls_Comp1';
// import Cc2 from './Class_Comp/Cls_Comp2';
// import Cc3 from './Class_Comp/Cls_Comp3';
// import Fc1 from './Functional_Comp/Func_Cmp1';
// import Fc2 from './Functional_Comp/Func_Cmp2';
// import Fc3 from './Functional_Comp/Func_Cmp3';

 import ClsApp1 from './Class_Comp/Class_Comp1';
import ClsApp2 from './Class_Comp/Class_Comp2';
import ClsApp3 from './Class_Comp/Class_Comp3';
import FuncApp1 from './Functional_Comp/Func_Comp1';
import FuncApp2 from './Functional_Comp/Func_Comp2';
import FuncApp3 from './Functional_Comp/Func_Comp3';

// import Login from './FormEvents/Login';
//import './FormEvents/Forms.css';
//import Signup from './FormEvents/SignUp';

// import Home from './RoutNavBar/Home';
// import AboutUs from './RoutNavBar/AboutUs';
// import Contact from './RoutNavBar/Contact';
// import Login from './RoutNavBar/Login';
// import Signup from './RoutNavBar/Signup';
// import Career from './RoutNavBar/Career';
// import Navbar from './RoutNavBar/Navbar';
// import Nopage from './RoutNavBar/Nopage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <ClsApp1 name="cls prop1"/>
    <ClsApp2 name="cls prop2" age='24'/>
    <ClsApp3 name="cls prop3" age='25' salary="200000"/>
    <FuncApp1 name ="Func1 prop1 " />
    <FuncApp2 name ="Func2 prop2" version ='4.0'/>
    <FuncApp3 name ="Func3 prop3" version='2.0' year='2024'/>  
  </div> 
);

//<Signup />
// <Login /> 
 /* <Cc1 name="p1" and CName=" Comp 1"/>
   <Cc2 name="p2" and CName=" Comp 2"/>
  <Cc3 name="p3" and CName=" comp 3"/> 
  <Fc1 name="props1" and CName="functional Comp 1"/>
  <Fc2 name="props2" and CName="functional Comp 2"/>
  <Fc3 name="props3" and CName="functional Comp 3"/> */
  //  <div>
  //    <ClsApp1/>
  //     <ClsApp2 />
  //    <ClsApp3/>
  //    <FuncApp1 />
  //    <FuncApp2 />
  //  <FuncApp3 />  
//  <BrowserRouter>
//  <Navbar />
//  <Routes>
//  <Route path ="/" element={<Home />} />
//  <Route path ="/aboutUs" element={<AboutUs />} />
//  <Route path ="/contact" element={<Contact />} />
//  <Route path ="/login" element={<Login />} />
//  <Route path ="/signup" element={<Signup />} />
//  <Route path ="/career" element={<Career />} />
//  <Route path = "/*" element={<Nopage/>} />
//  </BrowserRouter>
//  </Routes>
//  </BrowserRouter>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

