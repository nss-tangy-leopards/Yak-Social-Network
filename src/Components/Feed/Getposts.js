import userList from "../User/userList"
import getFriends from "../Friends/getFriends"


export default class Getposts{
    //returns a promise that returns an array of posts the current user is able to see
    static posts (){
        return new Promise( function (resolve, reject) {
        //hard coded to user one replace with get user function eventually
        let currentUser = 1 
        //declare local variables
        let Posts = []
        let Friends = []
        let Following = []
        let users = []
        //get list of users names in array indexed by userId
        userList.userList().then(r => {
            users = r
            //get list of friends by userId
            return getFriends.getFriends()
        }).then(friends => {
                Friends = friends
                //get list of users the current user is following
                return fetch("http://localhost:8088/followers")
            }).then(r => r.json()).then(followers => {
                followers.forEach(follow => {
                    if(follow.follower === currentUser){
                        Following.push(follow.following)
                    }
                })
                //get list of all posts
                return fetch("http://localhost:8088/posts")
            }).then(r => r.json()).then(posts => {
                //begin sorting posts
                posts.forEach(post => {
                    //check if the post is from a friend
                    if(Friends.includes(post.userId)){
                        //check if the post is private or is for the current user only
                        if(post.viewer === currentUser || post.viewer === false){
                            let data = {
                                "user": users[post.userId],
                                "post": post
                            }
                            Posts.push(data)
                        }
                    //check if the post is from the current user
                    }else if(post.userId === currentUser){
                        let data = {
                            "user": users[post.userId],
                            "post": post
                        }
                        Posts.push(data)
                    }else{
                        //check if the post is from a followed user and is public
                        if(Following.includes(post.userId) && post.friends === false){
                            let data = {
                                "user": users[post.userId],
                                "post": post
                            }
                            Posts.push(data)
                        }
                    }
                })
                //since posts are stored chronolically (oldests first) reverse the array on return
                resolve(Posts.reverse())
            })
        })  
    }
}