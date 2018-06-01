import React, {Component} from "react"

export default class Dropdown extends Component{


    render(){
        return(
            <option value={this.props.id}>{this.props.name}</option>
        )
    }
}