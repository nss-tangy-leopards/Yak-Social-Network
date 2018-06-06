import React, { Component } from "react"


const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  }


export default class Register extends Component {

    state={
        email: "",
        firstName: "",
        lastName: "",
        sate: "",
        city: "",
        password: ""
    }

    createUser(){
         // Create user in API
         fetch("http://localhost:5001/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email: this.state.email, password: this.state.password, firstName: this.state.firstName, lastName: this.state.lastName, city: this.state.city, state: this.state.state})
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
                <h1 className="h3 mb-3 font-weight-normal">Register</h1>
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input onChange={this.handleFieldChange} type="email" id="email" className="form-control" placeholder="Email address" required="" autoFocus="" />
                <label htmlFor="inputFirstName" className="sr-only">First Name</label>
                <input onChange={this.handleFieldChange} type="First Name" id="First Name" className="form-control" placeholder="First Name" required="" autoFocus="" />
                <label htmlFor="inputLastName" className="sr-only">Last Name</label>
                <input onChange={this.handleFieldChange} type="Last Name" id="Last Name" className="form-control" placeholder="Last Name" required="" autoFocus="" />
                <label htmlFor="inputState" className="sr-only">State</label>
                <input onChange={this.handleFieldChange} type="State" id="State" className="form-control" placeholder="State" required="" autoFocus="" />
                <label htmlFor="inputCity" className="sr-only">City</label>
                <input onChange={this.handleFieldChange} type="City" id="City" className="form-control" placeholder="City" required="" autoFocus="" />
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input onChange={this.handleFieldChange} type="password" id="password" className="form-control" placeholder="Password" required="" />
                <div className="checkbox mb-3">
                    <input type="checkbox" value="remember-me" /> Remember me
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="button" onClick={this.createUser}>Sign up</button>
            </form>
            </div>
        )
    }
}
