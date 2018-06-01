export default class getFriends{
    //returns a promise that resolves to an array of the current users friends list stored as their userIds
    static getFriends(){
        return new Promise(function(resolve, reject){
            let Friends = []
            //hardcoded to userId 1 for development reasons
            let currentUser = 1
            fetch("http://localhost:8088/friends").then(r => r.json())
            .then(friends => {
                //for each friend relationship check if the current user is one of the two users
                //also check to make sure the status is accepted
                friends.forEach(friend => {
                    if(friend.userOne === currentUser && friend.status === "accepted"){
                        Friends.push(friend.userTwo)
                    }
                    else if(friend.userTwo === currentUser && friend.status === "accepted"){
                        Friends.push(friend.userOne)
                    }
                })
                resolve(Friends)
            })
        })
    }
}