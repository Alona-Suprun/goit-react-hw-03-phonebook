import React, { Component } from 'react';

import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  inputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  checkContact = () => {
    const { name } = this.state;
    const { onCheckContact } = this.props;
    return onCheckContact(name);
  };

  formSubmit = e => {
    e.preventDefault();
    const isNoName = this.checkContact();
    if (!isNoName) return;
    this.props.onSubmit(this.state);
    this.resetForm();
  };

  render() {
    return (
      <form className={s.form} onSubmit={this.formSubmit}>
        <label className={s.label}>
          Name
          <input
            placeholder="type name"
            className={s.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={this.state.name}
            onChange={this.inputChange}
          />
        </label>

        <label className={s.label}>
          Number
          <input
            placeholder="type number"
            className={s.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={this.state.number}
            onChange={this.inputChange}
          />
        </label>

        <button type="submit" className={s.button}>
          Add contact
        </button>
      </form>
    );
  }
}
export default ContactForm;
