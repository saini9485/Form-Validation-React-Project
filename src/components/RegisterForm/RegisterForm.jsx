import React, { Component } from "react";
import "./RegisterForm.css"

export class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      country: "",
      Language: "",
      Gender: "",
    };
  }

//  1.  HandleName 
  handleName = (event) => {
    console.log(event.target.value);
    this.setState(
      {
        name: event.target.value,
      },
      () => {
        console.log("name ->", this.state.name);
      }
    );
  };

  //  2.  HandleEmail 
  handleEmail = (event) => {
    this.setState(
      {
        email: event.target.value,
      },
      () => {
        console.log("email ->", this.state.email);
      }
    );
  };


   //  3.  HandlePassword 
  handlePassword = (event) => {
    this.setState(
      {
        password: event.target.value,
      },
      () => {
        console.log("password ->", this.state.password);
      }
    );
  };


   //  4.  HandleSelector 
  handleSelect = (event) => {
    console.log(event.target.value);
    this.setState({
      country: event.target.value,
    });
  };


   //  5.  HandleGender
  handleGender = (event) => {
    console.log(event.target.value);
    this.setState({
      Gender: event.target.value,
    });
  };


   //  6.  HandleLanguage
  handleLanguage = (event) => {
    console.log(event.target.value);
    this.setState({
      Language: event.target.value,
    });
  };


   //  6.  HandleSubmitButton
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.email, this.state.password);
  };

  //Start Form....
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} className="Main_Form">
         
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={this.handleName}
              value={this.state.name}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email </label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={this.handleEmail}
              value={this.state.email}
            />
          </div>

          <div className="form-group">
            <label htmlFor="pwd">Password </label>
            <input
              type="text"
              name="password"
              id="pwd"
              onChange={this.handlePassword}
              value={this.state.password}
            />
          </div>

          <div className="form-group">
            <label htmlFor="Country">Select Country </label>
            <select
              onChange={this.handleSelect}
              value={this.state.country}
              name="countries"
              id="countries"
            >
              <option value="india">India</option>
              <option value="usa">USA</option>
              <option value="uk">UK</option>
            </select>
          </div>

          <div
            className="form-group"
            onChange={this.handleLanguage}
            value={this.state.Gender}
            name="Language"
          >
            <div>
              <label htmlFor="Language">Select Language</label>
            </div>

            <span>
              Javascript
              <input
                type="checkbox"
                name="javascript"
                value="Javascript"
                id="javascrip"
              />
            </span>
            <span>
              HTML <input type="checkbox" name="HTML" value="HTML" id="HTML" />
            </span>
            <span>
              CSS <input type="checkbox" name="CSS" value="CSS" id="CSS" />
            </span>
          </div>

          <div
            className="form-group"
            onChange={this.handleGender}
            value={this.state.Gender}
            name="Gender"
          >
            <div>
              <lable htmlFor="Gender">Select Gender</lable>
            </div>
            <span>
              Male
              <input
                type="radio"
                name="Gender"
                value="Male"
                id="male"
              />
            </span>
            <span>
              Female
              <input type="radio" name="Gender" value="Female" id="female" />
            </span>
          </div>
          
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </>
    );
  }
}
