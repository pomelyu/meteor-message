import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';

import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

class TodoInput extends React.Component {
  constructor(props) {
    super(props);

    this._initState = Immutable.fromJS({
      text: '',
    });
    this.state = this._initState.toJS();

    this.textOnChange = this.textOnChange.bind(this);
    this.submitOnClick = this.submitOnClick.bind(this);
  }

  submitOnClick(event) {
    event.preventDefault();
    
    const text = this.state.text.trim();
    if (!text) return;
    this.props.submitOnClick(text);

    this.setState(this._initState.toJS());
  }

  textOnChange(event) {
    const { value } = event.target;
    this.setState({ text: value });
  }

  render() {
    const { className } = this.props;
    const { text } = this.state;
    return (
      <form className={`todo-input ${className}`} onSubmit={this.submitOnClick}>
        <TextField onChange={this.textOnChange} value={text} />
        <Button onClick={this.submitOnClick}>Send</Button>
      </form>
    )
  }
}

TodoInput.propTypes = {
  className: PropTypes.string,
  submitOnClick: PropTypes.func,
}

/* eslint-disable no-unused-vars */
TodoInput.defaultProps = {
  className: '',
  submitOnClick: (text) => {},
}
/* eslint-enable no-unused-vars */

export default TodoInput;
