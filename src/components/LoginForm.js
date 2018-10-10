import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
      id: ''
    };
  }

  handleInputChange = (event) => {
    const newState = {}
    newState[event.target.id] = event.target.value
    if (event.target.id === 'username'){
      this.setState({id: event.target.value})
    }
    this.setState({...newState})
  }

  handleSubmit = (e) => {
    e.preventDefault()

    if (this.state.username !== '' && this.state.password !== ''){
      this.props.onSubmit(this.state,e)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input 
            id="username" 
            name="username" 
            type="text" 
            value={this.state.username}
            onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
            id="password" 
            name="password" 
            type="password" 
            value={this.state.password}
            onChange={this.handleInputChange}/>
          </label>
        </div>
        <div>
          <button 
            /* onClick={this.handleSubmit} */
            type="submit"
            
            >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
