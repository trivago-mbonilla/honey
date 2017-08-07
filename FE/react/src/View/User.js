import React, { Component } from 'react';

class User extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: null,
            users: []
        };

        this.fetchHelloWorld = this.fetchHelloWorld.bind(this);
        this.fetchUsers = this.fetchUsers.bind(this);
    }

    fetchHelloWorld() {
        debugger;
        if(window.location.href.indexOf('token') === -1) {
debugger;
            window.location.href = "http://localhost:8000?successUrl=" + window.location.href;
        }
    }
    fetchUsers() {
        let headers = new Headers();
        headers.append('X-token', 'mytoken');

        fetch("http://127.0.0.1:8088/users", {headers})
            .then(response => response.json())
            .then(res =>  this.setState({users: res.users}));
    }

    // method lifecycle where should be the fetch data
    componentDidMount() {
        this.fetchHelloWorld();
        this.fetchUsers();
    }


    login() {
        fetch("http://127.0.0.1:8088/login")
            .then(response => response.json())
            .then(res => console.log(res));
    }

    render() {

        const users = this.state.users;
        if (!users) { return null; }

        return (
            <div>
                <h1>hello {this.state.title}</h1>
                <form>
                    <label>Username</label>
                    <input type="text" name="username"/>
                    <input type="password" name="password"/>
                    <button type="submit">Login</button>
                </form>

                { users.map(user =>
                    <div>{user.username}</div>
                ) }
            </div>
        );
    }
}

export default User;