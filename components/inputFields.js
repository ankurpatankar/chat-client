import React from 'react';

class SingleLine extends React.Component {
    render () {
        const {
            label,
            name,
            onChange,
            value,
        } = this.props;
        return (
            <div className="input-field">
                {
                    label
                        ? <label>{label}</label>
                        : null
                }
                <input
                        type="text"
                        value={value}
                        name={name}
                        onChange={e => onChange(e)} />
            </div>
        );
    }
}

class MultiLine extends React.Component {
    render () {
        const {
            label,
            name,
            onChange,
            onKeyUp,
            value,
        } = this.props;
        return (
            <div className="input-field">
                {
                    label
                        ? <label>{label}</label>
                        : null
                }
                <textarea
                        autoCapitalize="sentences"
                        value={value}
                        name={name}
                        onChange={e => onChange(e)}
                        onKeyUp={e => onKeyUp(e)}
                        rows="4"
                        columns="20" />
            </div>
        );
    }
}

module.exports = {
    SingleLine,
    MultiLine,
}
