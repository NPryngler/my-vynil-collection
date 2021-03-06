import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "./style.css";

export default class UpdateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      name: '',
      password: '',
      email: '',
      pisctureSrc: '',
      city: '',
      valid: false,
      emailValidationMessage: '',
      passwordValidationMessage: '',
      emailBorder: '',
      passwordBorder: '',
    }
  }

  componentDidMount = async () => {
    this.fetchUser();
  }

  fetchUser = async () => {
    const user = await (await fetch('/api/current-user', {
      method: "GET",
      headers: {
        'jwt-token': localStorage.getItem('user-jwt'),
      }
    })).json();
    this.setState({
      user: user
    });
  }

  onInputChange = evt => {
    evt.preventDefault();
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  isEmailPasswordValid = () => {

    let isValid = true;
    let emailRegex = /@/;
    let specialCharacterPattern = /[!@()#$%&'*+/=?^_`{|}~-]+/;
    let numberPattern = /\d/;
    let emailRedBorder;
    let passwordRedBorder;
    let emailMessage;
    let passwordMessage;

    if (this.state.email && !emailRegex.exec(this.state.email)) {
      isValid = false;
      emailRedBorder = 'solid 2px red';
      emailMessage = 'Email address is invalid!';
    }
    if (this.state.password.length > 0 && (this.state.password.length < 7 || !specialCharacterPattern.exec(this.state.password) || !numberPattern.exec(this.state.password))) {
      isValid = false;
      passwordRedBorder = 'solid 2px red';
      passwordMessage = 'Password is invalid! Password must be at least 7 characters long and include at least one number and one special character';
    }
    this.setState({
      valid: isValid,
      emailBorder: emailRedBorder,
      passwordBorder: passwordRedBorder,
      emailValidationMessage: emailMessage,
      passwordValidationMessage: passwordMessage
    });
  }

  isValid = () => {
    this.isEmailPasswordValid();
  }

  updateUser = async (evt) => {
    evt.preventDefault();
    if (this.state.valid) {
      const requestBody = JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        pictureSrc: this.state.pictureSrc,
        city: this.state.city
      });

      const response = await fetch('/api/current-user', {
        method: 'PUT',
        body: requestBody,
        headers: {
          'Content-Type': 'application/json',
          'jwt-token': localStorage.getItem('user-jwt'),
        }
      });
    }
  }

  render() {

    const emailStyle = {
      border: this.state.emailBorder,
      outline: 'none',
    }
    const passwordStyle = {
      border: this.state.passwordBorder,
      outline: 'none',
    }

    return (
      <div>
        <h1 className='personalize-welcome'>Update Your Profile {this.state.user.name}</h1>
        <div className="register-form">
          <form className="form" >
            <div className="input-container">
              <label className="register-label">Name: </label><br />
              <input type='text' placeholder={this.state.user.name} onChange={this.onInputChange} name='name' value={this.state.name}>
              </input>
            </div>
            <div className="input-container">
              <label className="register-label">Email: </label><br />
              <input type='text' placeholder={this.state.user.email} onChange={this.onInputChange} name='email' value={this.state.email} style={emailStyle}>
              </input>
              <p className="error-message">{this.state.emailValidationMessage}</p>
            </div>
            <div className="input-container">
              <label className="register-label">Password: </label><br />
              <input type='password' placeholder={this.state.user.password} onChange={this.onInputChange} name='password' value={this.state.password} style={passwordStyle}>
              </input>
              <p className="error-message">{this.state.passwordValidationMessage}</p>
            </div>
            <div className="input-container">
              <label className="register-label">Profile Picture Url: </label><br />
              <input type='text' onChange={this.onInputChange} name='pictureSrc' placeholder={this.state.user.pictureSrc} value={this.state.pictureSrc}>
              </input>
            </div>
            <div className="input-container">
              <label className="register-label">City: </label><br />
              <input type='text' placeholder={this.state.user.city} onChange={this.onInputChange} name='city'
                placheolder={this.state.user.city} value={this.state.city}>
              </input>
            </div>
            <div>
              {this.state.valid && (
                <button onClick={this.updateUser} className="save-button"><Link className="save-link" to='/my-collection'>Save Changes</Link></button>
              )}
              {!this.state.valid && (
                <button className="validate-button" onClick={this.isValid}>Validate Changes</button>
              )}
              <button className="cancel-button"><Link className="cancel-link" to='/my-collection'>Cancel</Link></button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
