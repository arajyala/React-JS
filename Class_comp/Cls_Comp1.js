import React from 'react';
class Cc1 extends React.Component{
    constructor(){
        super();
        console.log(this)
    }
    /* inline Css  */
    render(){
        return(
            <div>
                <h1>class component1..</h1>
                <h2 style={{color:'White', background:'Black'}}>{this.props.name} </h2>
                 
            </div>
        )
    }
};
export default Cc1;
