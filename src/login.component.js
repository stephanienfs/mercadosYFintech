import React, { Component } from "react";
import { LoginService } from './services/login.service';
import axios from "axios";

export default class LoginComponent extends Component {
    constructor(props){
        super(props)
        this.state = {mail: '', password: ''};
        this.loginResult="";
        this.headers= {'Content-Type': 'application/json;charset=UTF-8'};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeMail = this.handleChangeMail.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
      }
    handleSubmit(e){
        e.preventDefault();
        // axios.post('http://localhost:8080/login',{mail: this.state.mail, password: this.state.password}, this.headers).then(res=>{
        //     this.loginResult=res.data;
        //     console.log(res)
        // })
        //let {bookname,author}=this.state;
        fetch('http://localhost:8080/login', {method: 'post',headers: {'Content-Type': 'application/json'}, body: JSON.stringify({mail:this.state.mail,password:this.state.password,})})
        .then(response=>response.json()).then(data=>{
         window.alert(data)
    })
    }
    handleChangeMail(e){
        this.setState({ mail: e.target.value})
    }
    handleChangePass(e){
        this.setState({ password: e.target.value })
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Ingresar</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" onChange={this.handleChangeMail} className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" onChange={this.handleChangePass} className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Ingresar</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        );
    }
}