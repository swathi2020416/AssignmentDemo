import React,{ Component } from 'react';

class AddUser extends Component{

    state = {
        name:null,
        job:null,
        isEditing:false
    }
   
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.state);  
        e.target.reset();

    }
    // update state
    updateState = (e) => {
        this.setState({
            [e.target.name]:e.target.value,
        });
    }

    render(){
        return(
            <div className="row">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field col s4">
                        <input name="name" autoComplete="off" placeholder="Enter your name" required type="text" onChange={ this.updateState} />
                    </div>
                    <div className="input-field col s2">
                        <input name="job" autoComplete="off" type="text" required placeholder="Enter your job" onChange={ this.updateState } />
                    </div>
                    <div className="input-field col s2">
                        <input type="submit" value="Add " className="btn blue"/>
                    </div>
                </form>
            </div>
        );
    }
}
export default AddUser;
