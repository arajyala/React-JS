import React from 'react'
class Cc2 extends React.Component{

    constructor(){
        super()
        console.log(this)
    }
    render(){
        // internal css
        const h2Style={color:'White' ,background:'red'}

        return(
            <div>
                <h1>Class Component2..</h1>
                <h2 style={h2Style}>Name:{this.props.name}  age:{this.props.age} </h2>
                
            </div>
        )
    }
}
export default Cc2;
