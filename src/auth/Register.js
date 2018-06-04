import React, { Component } from "react"


export default class Register extends Component {

    createUser(){
         // Create user in API
         fetch("http://localhost:5001/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email: this.state.email, password: this.state.password})
        })

        // Set local storage with newly created user's id and show home view
        .then(newUser => {
            this.props.setActiveUser(newUser.id)
            this.props.showView("home")
        })
    }

    render() {
        return (
            <div>
            <h1>Register</h1>
            <form className="form-signup" onSubmit={this.handleLogin}>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input onChange={this.handleFieldChange} type="email" id="email" className="form-control" placeholder="Email address" required="" autoFocus="" />
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input onChange={this.handleFieldChange} type="password" id="password" className="form-control" placeholder="Password" required="" />
                <div className="checkbox mb-3">
                    <input type="checkbox" value="remember-me" /> Remember me
                </div>
                <button className="btn btn-lg btn-primary btn-success btn-block" type="submit">Sign in</button>
                <button className="btn btn-lg btn-primary btn-block" type="button" onClick={this.register}>Sign up</button>
            </form>
            </div>
        )
    }
}
