import React from 'react';
import { connect } from 'react-redux';
import { setUserInfo } from '../actions/userInfo';
import { Link } from 'react-router-dom';
import {
    SingleLine,
} from '../components/inputFields.js';

class App extends React.Component {
    constructor(props) {
        super();
        this.state = {
            userName: '',
            name: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.saveCurrentUser = this.saveCurrentUser.bind(this);
    }

    handleChange = (event) => {
        const {
            name,
            value,
        } = event.target;
        this.setState({
            [name]: value,
        });
    }

    saveCurrentUser(userName, name) {
        const userInfo = {
            ...this.state,
        };
        this.props.dispatch(setUserInfo(userInfo));
    }

    render () {
        const {
            userName,
            name,
        } = this.state;
        return (
            <div>
                <h2>{`Welcome to LightChat !!!`}</h2>
                <SingleLine
                    label={'Username'}
                    name={'userName'}
                    value={userName}
                    onChange={this.handleChange} />
                <SingleLine
                    label={'Name'}
                    name={'name'}
                    value={name}
                    onChange={this.handleChange} />
                <Link to="/chat">
                    <button onClick={this.saveCurrentUser}>Start Chat</button>
                </Link>
            </div>
        );
    }
}

export default connect(state => state)(App);
