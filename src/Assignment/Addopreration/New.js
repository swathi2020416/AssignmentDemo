import React, { Component } from 'react';
import Users from './Users';
import AddUser from './AddUser';

class New extends Component{

    
    state = {

        users:[
         
    
        ]
      }
      // (newUser) is received from AddUser.js
      addUser = (newUser) => {
            let users = [...this.state.users, newUser];
            this.setState({
                users
            });     
      }

      // when press edit button
      // (i) is received from Users.js
      pressEditBtn = (i) => {
        let users = this.state.users;
        users[i].isEditing = true;
        this.setState({
            users
        });
      }

      // (i, name, age) is received from Users.js
      updateUser = (i, name, job) => {
        let users = this.state.users;
        users[i].name = name;
        users[i].job = job;
        users[i].isEditing = false;

        this.setState({
            users
        });

      }
      // (i) is received from Users.js
      pressDelete = (i) => {
        let users = this.state.users.filter((u,index)=>{
            return index !== i;
        });
        this.setState({
            users
        });
      }

    render(){
        return(
            <div className="container">
                <h1>Operations</h1>
                <Users allUsers={this.state.users} pressEditBtn={this.pressEditBtn} updateUser={this.updateUser} pressDelete={this.pressDelete} />
                <AddUser addUser={this.addUser}/>
            </div>
        );
    }
}

export default New;