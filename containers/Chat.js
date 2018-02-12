import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    MultiLine,
} from '../components/inputFields.js';
import { sendMessage } from '../actions/message';
import ChatMessage from '../components/chatMessage'

class Chat extends React.Component {
    constructor(props) {
        super();
        this.state = {
            content: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
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

    handleKeyUp = (event) => {
        if (event.keyCode !== 13) {
            return;
        }

        this.props.dispatch(sendMessage({
            ...this.state,
            timestamp: Date.now(),
            author: this.props.userInfoReducer.userInfo.name,
        }));
        this.setState({
            content: '',
        });
    }

    render () {
        const {
            content,
        } = this.state;
        const {
            author: from,
            timestamp,
            content: message,
        } = this.props.messageReducer.message;
        return (
            <div className="chat-client">
                <Link to="/">
                    <button>Exit Chat</button>
                </Link>
                <div className="message-history">
                    {message ? <ChatMessage from={from} timestamp={timestamp} message={message} /> : null}
                </div>
                <MultiLine
                    value={content}
                    name={'content'}
                    onChange={this.handleChange}
                    onKeyUp={this.handleKeyUp} />
            </div>
        );
    }
}

export default connect(state => state)(Chat);
