import React from 'react';

export default class ChatMessage extends React.Component {
    render() {
        const {
            from,
            timestamp,
            message,
        } this.props;
        const messageAlignment = from ? 'left' : 'right'
        return (
            <div className={`chat-message ${messageAlignment}`}>
                {from ? <div className="sender">{from}</div> : null}
                <div className="message">{message}</div>
                <div className="time">{timestamp.toLocaleString()}</div>
            </div>
        );
    }
}
