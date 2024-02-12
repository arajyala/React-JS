import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Cls_App1 from './Class_comp/Class_Comp1';
import Cls_App2 from './Class_comp/Class_Comp2';
import Cls_App3 from './Class_comp/Class_Comp3';

import Func_App1 from './Functional_Comp/Func_Comp1';
import Func_App2 from './Functional_Comp/Func_Comp2';
import Func_App3 from './Functional_Comp/Func_Comp3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
    <Cls_App1 />
    <Cls_App2 />
    <Cls_App3 />
    <Func_App1/>
    <Func_App2/>
    <Func_App3/>
    </div>
   
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

