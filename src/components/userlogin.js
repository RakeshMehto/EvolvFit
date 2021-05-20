import '../App.css';
import React, { Component } from 'react';
import { Button, Row, Col,Label  } from 'reactstrap';
import { Control, LabelForm, Errors, LocalForm } from 'react-redux-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
function UserLogin (){
        return (
            <div className=" pp" >
            <LocalForm className="login-page">
                <h1 className="h1">login</h1>
                <Row className="form-group">
                    <Label htmlFor="UserName" ></Label>
                        <Col>
                            <Control.text className=".login-page-input" model=".username" id="username" name="username"
                                placeholder="User Name"
                                        className="form-control"
                                         />
                                </Col>
                </Row>
                <Row className="form-group">
                    <Label htmlFor="password"></Label>
                        
                            <Control.password className=".login-page-input" model=".password" id="password" name="password"
                                placeholder="Password"
                                        className="form-control"
                                         />

                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Button type="submit" className="btn"><Link to="userPage">
                                    Login
                                    </Link></Button>
                                </Col>
                            </Row>
            </LocalForm>
            </div>
        );

}
export default UserLogin;