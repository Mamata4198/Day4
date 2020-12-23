import React, { Component } from 'react'
import "./style.css"

import ChildComponent from "./child_component.jsx"

export default class parent extends Component {

    state={
        child_style:{
            
        }
    }


 componentWillMount(){
        let child_style=this.state.child_style
        child_style["color"]="blue"
        this.setState({child_style:child_style},console.log(this.state))

    }

    componentDidMount(){
    
        setInterval(() => {
            let child_style=this.state.child_style
            child_style["color"]="red"
            this.setState({child_style:child_style},console.log(this.state))
        }, 2000);

    }

    componentDidUpdate(){

        console.log("componentDidUpdate executed")

    }


    render() {
        return (
            <div className="parent" >
                <h1>Parent component </h1> <br />
              <center></center>  <input type="text" onChange={(e)=>{
                    let child_style=this.state.child_style
                    child_style["color"]=e.target.value
                    this.setState({child_style:child_style},console.log(this.state))
                }}  /><center />

                <p>Current color: {this.state.child_style && this.state.child_style.color?this.state.child_style.color:""}</p>
                <br />

                
                <ChildComponent child_style={this.state.child_style}/>

               

            </div>
        )
    }
}
        