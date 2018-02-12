import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    MultiLine,
} from '../components/inputFields.js';

class Chat extends React.Component {
    render () {
        console.log(this);
        console.log(`Chat ${JSON.stringify(this.props)}`);
        const { message } = this.props.messageReducer;
        return (
            <div className="chat-client">
                <Link to="/">
                    <button>Exit Chat</button>
                </Link>
                <div className="message-history"></div>
                <MultiLine
                    value={message}
                    onChange={this._onChange} />
            </div>
        );
    }
}

export default connect(state => state)(Chat);
