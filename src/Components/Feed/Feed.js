import React, {Component} from "react"
import Post from "./Post"
import Getposts from "./Getposts"
import CreatePost from "./CreatePost"


export default class Feed extends Component {
    state = {
        posts: []
    }

    update = (post) =>{
        // debugger
        let update = this.state.posts
        update.unshift(post)
        // debugger
        this.setState({posts: update})
    }

    loadInfo(){
        let Posts; 
        Getposts.posts().then(r => {
            Posts = r
            this.setState({"posts": Posts })
        })
    }

    componentDidMount(){
        this.loadInfo()
    }
    
    render(){
        return(
            <div>
                <h1>My Feed</h1>
                <CreatePost callback={this.update}/>
                {/* for each post render a post object */}
                {this.state.posts.map((p, i) => {
                    return <Post key={i} post={p} />
                })}
            </div>
        )
    }

}