import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Notes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ArrTitle: this.props.location.state.ArrTitle
        }

    }

    Remove = (idx)=>{
        let arr = this.state.ArrTitle.filter((r,i)=>(i !== idx))
        this.setState((prev)=>({
            ArrTitle:arr
        }));


    }






    render() {
        return (
            <div >
                <h2>Notes</h2>
                {this.state.ArrTitle.map((m, idx) =>
                    <div key={idx} align = 'left'>
                    <p key={idx}>{m.Title} {m.Discription} </p>
                    <button onClick={()=>this.Remove(idx)}>Remove</button>
                    </div>
                )}
            </div>
        );
    }
}

export default withRouter(Notes);