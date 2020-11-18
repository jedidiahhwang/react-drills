import React, {Component} from "react";

export default class Login extends Component {
    constructor () {
        super ();

        this.state = {
            username: "",
            password: ""
        }

        this.handleLoginChange = this.handleLoginChange.bind(this);
    }

    handleUsernameChange (name) {
        this.setState ({
            username: name
        })
    }

    handlePasswordChange (word) {
        this.setState ({
            password: word
        })
    }

    handleLoginChange () {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }

    render () {
        return (
            <div>
                <input onChange={(e) => this.handleUsernameChange(e.target.value)} type="text"/>
                <input onChange={(e) => this.handlePasswordChange(e.target.value)} type="text"/>
                <button onClick={this.handleLoginChange}>Login</button>
            </div>
        )
    }
}