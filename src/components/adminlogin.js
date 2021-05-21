import React, { Component } from "react";
import { Row, Form, FormFeedback } from "reactstrap";
import Nav from "./Navibar";
import { Control, LocalForm } from "react-redux-form";
import { Link } from "react-router-dom";
class AdminLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      touched: {
        username: false,
        password: false,
      },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };
  validate(username, password) {
    const errors = {
      username: "",
      password: "",
    };
    if (this.state.touched.username && username.length < 3)
      errors.username = "username should be >= 3 characters";
    else if (this.state.touched.username && username.length > 10)
      errors.username = "username should be <= 10 characters";
    if (this.state.touched.password && password.length < 3)
      errors.password = "password should be >= 3 characters";
    else if (this.state.touched.password && password.length > 10)
      errors.password = "password should be <= 10 characters";
    return errors;
  }
  render() {
    const errors = this.validate(this.state.username, this.state.password);
    return (
      <div>
        <Nav />
        <div className=" pp">
          <Form>
            <LocalForm className="login-page">
              <h1 className="h1">login</h1>
              <Row className="form-group">
                <Control.text
                  model=".username"
                  id="username"
                  name="username"
                  placeholder="User Name"
                  className="form-control login-page-input"
                  value={this.state.username}
                  valid={errors.username === ""}
                  invalid={errors.username !== ""}
                  onBlur={this.handleBlur("username")}
                  onChange={this.handleInputChange}
                />
                <FormFeedback>{errors.username}</FormFeedback>
              </Row>
              <Row className="form-group">
                <Control.password
                  model=".password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="form-control login-page-input"
                  value={this.state.password}
                  valid={errors.password === ""}
                  invalid={errors.password !== ""}
                  onBlur={this.handleBlur("password")}
                  onChange={this.handleInputChange}
                />
                <FormFeedback>{errors.password}</FormFeedback>
              </Row>
              <Row className="form-group">
                <button
                  type="submit"
                  className="btn btn2"
                  onClick={this.handleSubmit}
                >
                  <Link to="adminPage">Login</Link>
                </button>
              </Row>
            </LocalForm>
          </Form>
        </div>
      </div>
    );
  }
}
export default AdminLogin;
