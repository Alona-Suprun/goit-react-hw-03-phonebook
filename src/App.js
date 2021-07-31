import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Section from './components/Section/Section';
import Form from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import FilterContact from './components/FilterContacts/FilterContacts';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = newContact => {
    const contact = {
      id: uuidv4(),
      name: newContact.name,
      number: newContact.number,
    };
    this.setState(({ contacts }) => ({ contacts: [...contacts, contact] }));
  };

  filterContact = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getContactsLis = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  checkContact = name => {
    const { contacts } = this.state;
    const inContact = !!contacts.find(contact => contact.name === name);
    inContact && alert(name + 'is already in contacts');
    return !inContact;
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const contactsList = this.getContactsLis();
    return (
      <>
        <h1>Phonebook</h1>
        <Section>
          <Form onSubmit={this.addContact} onCheckContact={this.checkContact} />
        </Section>
        <Section title="Contacts">
          <FilterContact
            value={this.state.filter}
            onChange={this.filterContact}
          />
          <ContactList
            contacts={contactsList}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}

export default App;
