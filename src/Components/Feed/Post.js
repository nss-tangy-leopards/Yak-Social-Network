import React, {Component} from "react"

export default class Post extends Component {
    
    render(){
        // debugger
        return(
            <div>
                <h3>{this.props.post.user}</h3>
                <p>{(new Date(this.props.post.post.timestamp).toString().substring(4,21)).toString()}</p>
                <div>
                    <p>{this.props.post.post.text}</p>
                </div>
            </div>
        )
    }

}