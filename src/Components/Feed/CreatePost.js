import React, {Component} from "react"
import Dropdown from "./Dropdown"
import getFriends from "../Friends/getFriends"
import userList from "../User/userList"

export default class CreatePost extends Component {
    constructor(props){
        super(props)
        this.state = {
            text: "",
            viewer: false,
            friends: false,
            names: [],
            friendList: []
        }
        this.handleText = this.handleText.bind(this)
        this.handleDrop = this.handleDrop.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    //image handler here
    //not implemented image upload

    //update state with post text context
    handleText(event){
        this.setState({text: event.target.value})
    }

    //updates state with private post status
    handleDrop(event){
        if(event.target.value === "friends"){
            this.setState({friends : true, viewer: false})
        }else if(event.target.value === "public"){
            this.setState({friends: false, viewer: false})
        }else{
            this.setState({viewer: event.target.value, friends: false})
        }
    }

    //submit the post to api
    handleSubmit(event){
        let currentUser = 1 //hard coded until login completed
        //create post object
        let post = {
            userId: currentUser,
            text: this.state.text,
            timestamp: Date.now(),
            viewer: this.state.viewer,
            friends: this.state.friends
        }
        //do the json post
        fetch("http://localhost:8088/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        })
        .then(r => r.json())
        // debugger
        let update = {
            user: this.state.names[currentUser],
            post: post
        }
        this.props.callback(update)
        //clear the state to default

        event.preventDefault()
    }

    //load info for the dropdown population
    loadInfo(){
        let names = []
        let friends = []
        userList.userList().then(data => {
            names = data
            return getFriends.getFriends()
        }).then(data => {
            friends = data
            this.setState({names: names, friendList: friends})
        })
    }

    componentDidMount(){
        this.loadInfo()
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.text} onChange={this.handleText} />
                <select onChange={this.handleDrop}>
                    <option value="public">Public</option>
                    <option value="friends"> Friends only</option>
                    {this.state.friendList.map((f, i) => {
                        return <Dropdown key={i} id={f} name={this.state.names[f]} />
                    })}
                </select>
                <input type="submit" value="submit"/>
            </form>
        )
    }
}