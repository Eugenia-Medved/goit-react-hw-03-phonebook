import React, { Component } from 'react';
import shortid from 'shortid';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeName = e => {
    this.setState({
      name: e.currentTarget.value,
    });
  };

  handleChangeNumber = e => {
    this.setState({
      number: e.currentTarget.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.name, this.state.number);

    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    const nameId = shortid.generate();
    const telId = shortid.generate();

    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label for={nameId}> Name </label>
        <input
          className={s.input}
          id={nameId}
          type="text"
          value={name}
          onChange={this.handleChangeName}
        />
        <label for={telId}> Number </label>
        <input
          className={s.input}
          id={telId}
          type="text"
          value={number}
          onChange={this.handleChangeNumber}
        />
        <button className={s.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
