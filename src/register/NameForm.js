import React from 'react';

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {email: '', password: ''};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({password: event.target.password, email: event.target.email});
    }

    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input type="text" value={this.state.email} onChange={this.handleChange} />
          </label>
          <label>
              Password:
              <input type="text" value={this.state.password} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Login" />
          <label>
          <input type="checkbox" value="Remember Me?"  />
          </label>
        </form>
      );
    }
  }

export default NameForm;