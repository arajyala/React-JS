import React from "react";
import './Cls.css'

//external css
class Cc3 extends React.Component{
    constructor(){
        super()
        console.log(this)
    }
    render(){
        return(
            <div>
                <h1>Class Component3..</h1>
                <h2 className="h2Container">My name is {this.props.name} and Age is {this.props.age} and My salary is {this.props.salary} </h2>
            </div>
        )
    }
}
export default Cc3;
