import React from 'react';
import PropTypes from 'prop-types';

import s from './ContactList.module.css';
import Button from '../Button/Button';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={s.list}>
    {contacts.map(({ id, name, number }) => (
      <li className={s.item} key={id}>
        {name}: {number}
        <Button type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </Button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  onDeleteContact: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

export default ContactList;
