import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Title: '',
            Discription: '',
            Clients: [],
            ArrTitle:[],
            ArrDiscription:[],
            User:''


        }
    }

    EnterValue = (e) => {
        if (e.target.name === 'Title') {
            this.setState((prev) => ({
                Title: e.target.value
            }), () => {
               // console.log(this.state.Title)
            });
        }
        else if (e.target.name === 'Discription') {
            this.setState((prev) => ({
                Discription: e.target.value
            }), () => {
               // console.log(this.state.Discription)
            });
        }
    }

    BtnAdd = () => {

        let FindUser = this.state.Clients.findIndex((c) => c.Email === this.props.location.state.user.Email && c.Password === this.props.location.state.user.Password)
        if (FindUser === -1) {
            this.setState((prev) => ({
                Clients: [...prev.Clients, this.props.location.state.user]
            }), () => {

            });
        }
        FindUser = this.state.Clients.findIndex((c) => c.Email === this.props.location.state.user.Email && c.Password === this.props.location.state.user.Password)
        let client = this.state.Clients[FindUser]
        let ObjTitle=this.state.Title
        let ObjDiscription=this.state.Discription
        let ObjToPush = {Title:ObjTitle ,Discription:ObjDiscription }
        this.setState((prev)=>({
            ArrTitle:[...prev.ArrTitle,ObjToPush],
            user: client
        }),()=>{
            this.setState((prev)=>({
                Title:'',
                Discription:''
                


            }),()=>{
                console.log(this.state.ArrTitle)
                console.log(this.state.ArrDiscription)
                console.log(this.state.user)
            });
        })
    }

    BtnToNotes = () => {
        this.props.history.push({
            pathname: '/Notes/',
            state: {
                ArrTitle:this.state.ArrTitle,
                User:this.state.user
            }
        })

    }



    render() {
        return (
            <div>
                <Link to="/">LOg|</Link>
                <h1>Main</h1>

                <div align='left'>
                    <label>Title  </label><input type="text" name="Title" value={this.state.Title} onChange={this.EnterValue} /><br />
                    <label>Discription  </label><input type="text" name="Discription" value={this.state.Discription} onChange={this.EnterValue} /><br /><br />
                </div>
                <div>
                    <button style={{ fontSize: '40px' }} onClick={this.BtnAdd}>Add</button><br /><br />
                </div>
                <div>
                    <button style={{ fontSize: '20px' }} onClick={this.BtnToNotes}>Go to note page</button>
                </div>

            </div>

        );
    }
}

export default withRouter(Main);