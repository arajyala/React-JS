import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'


const Fc1= (props)=>{

    return(
        <div>
            <h1 className="text-decoration-underline">Functional Component1..</h1>
            <h2>{props.Name} and {props.CName}</h2>
        </div>
    ) 
}
export default Fc1;
