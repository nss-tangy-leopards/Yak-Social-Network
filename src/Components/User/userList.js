export default class userList{
    //returns a promise that resolves to a list of users indexed by id
    static userList(){
        return new Promise(function (resolve, reject){
            let usersList = []
            usersList.push("index starts at one")
            fetch("http://localhost:8088/users").then(r => r.json()).then(users => {
                users.forEach(user => {
                    let name = `${user.firstName} ${user.lastName}`
                    usersList.push(name)
                })
                resolve(usersList)
            })
        })
    }
}