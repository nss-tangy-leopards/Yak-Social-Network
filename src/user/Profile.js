import React, { Component } from "react"
import "./Profile.css"

export default class Profile extends Component{

    render(){
        return(
            <h1>{this.props.user}</h1>
        )
    }
}