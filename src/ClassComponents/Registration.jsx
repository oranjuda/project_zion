import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            obj: '',
            Email: '',
            Password: '',
            ConfirmPassword: ''

        }
    }
    EnterValue = (e) => {
        if (e.target.name === 'Email') {
            this.setState((prev) => ({
                Email: e.target.value
            }), () => {
                // console.log(this.state.Email)

            });

        }
        else if (e.target.name === 'Password') {
            this.setState((prev) => ({
                Password: e.target.value
            }), () => {
                // console.log(this.state.Password)
            });

        }
        else if (e.target.name === 'ConfirmPassword') {
            this.setState((prev) => ({
                ConfirmPassword: e.target.value
            }), () => {
                //console.log(this.state.ConfirmPassword)
            });

        }



    }

    BtnClick = () => {
        if (this.state.Password === '' || this.state.Email === '') {
            alert('wrong data')
            this.props.history.push({
                pathname: '/',
                state: { new: this.state.obj }
            });

        }
        if (this.state.Password === this.state.ConfirmPassword) {
            let ObjToAdd = { Email: this.state.Email, Password: this.state.Password }
            this.setState((prev) => ({
                obj: ObjToAdd
            }), () => {
                this.props.history.push({
                    pathname: '/',
                    state: { new: this.state.obj }
                });


                console.log(this.state.obj)

            });

        }
        else {
            alert('one of the fields was incorrect')


        }

    }

    render() {
        return (

            <div>
                <div>
                    <h1>Registration</h1>
                </div>

                <div align='left'>
                    <label >Email  </label><input type="Email" name="Email" value={this.state.Email} onChange={this.EnterValue} /><br />
                    <label>Password  </label><input type="Password" name="Password" value={this.state.Password} onChange={this.EnterValue} /><br />
                    <label>Confirm Password  </label><input type="Password" name="ConfirmPassword" value={this.state.ConfirmPassword} onChange={this.EnterValue} /><br /><br /><br />


                </div>
                <div>
                    <button style={{ fontSize: '40px' }} onClick={this.BtnClick}>Register</button>
                </div>

            </div>
        );
    }
}

export default withRouter(Registration);