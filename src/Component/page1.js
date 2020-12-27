import React, { Component } from 'react'
import "./page2"
import "./style.scss"

import {Link} from "react-router-dom"
export class page1 extends Component{
    render() {
        return (
            <div className="page1">
            
            <h1>This is my page1 component</h1>
        
        <center> <Link to="./page2" className="btn btn-primary">open page2</Link></center> 
             </div>
        )
    }
}

export default page1
