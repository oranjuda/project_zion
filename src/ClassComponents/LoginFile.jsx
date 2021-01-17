import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';


class LoginFile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ArrRegClients: [],
            Email: '',
            Password: ''

        }
    }

    EnterValue = (e) => {
        if (e.target.name === 'Email') {
            this.setState((prev) => ({
                Email: e.target.value
            }));
        }
        else if (e.target.name === 'Password') {
            this.setState((prev) => ({
                Password: e.target.value
            }));
        }


    }

    BtnLogin = () => {
        
        
        if (this.props.location.state !== undefined) {
            let res = ''
            res = this.state.ArrRegClients.findIndex((c) => c.Email === this.props.location.state.new.Email && c.Password === this.props.location.state.new.Password)
            if (res === -1) {
                this.setState((prev) => ({
                    ArrRegClients: [...prev.ArrRegClients, this.props.location.state.new]
                }),()=>{
                    let res = ''
                    res = this.state.ArrRegClients.find((c) => c.Email === this.state.Email && c.Password === this.state.Password)
                    if (res !== undefined) {
                        this.props.history.push({
                            pathname: '/Main/',
                            state: { user: res }
            
                        })
            
            
                    }

                });
            }
        }


        let res = ''
        res = this.state.ArrRegClients.find((c) => c.Email === this.state.Email && c.Password === this.state.Password)
        if (res !== undefined) {
            this.props.history.push({
                pathname: '/Main/',
                state: { user: res }

            })
        }

    }

    render() {
        return (
            <div>
                <h1>Login</h1>

                <div align='left'>
                    <label>Email:</label><input type="Email" name="Email" value={this.state.Email} onChange={this.EnterValue} /><br />
                    <label>Password:</label><input type="Password" name="Password" value={this.state.Password} onChange={this.EnterValue} /><br /><br /><br />

                </div>

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button style={{ fontSize: '50px' }} onClick={this.BtnLogin}>Login</button><br />
                <br /> <Link to="/Registration">Press here to register</Link>

            </div>
        );
    }
}

export default withRouter(LoginFile);