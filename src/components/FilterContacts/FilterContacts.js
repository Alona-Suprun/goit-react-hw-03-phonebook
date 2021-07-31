import React from 'react';
import PropTypes from 'prop-types';

import s from './FilterContacts.module.css';

const FilterContact = ({ value, onChange }) => {
  return (
    <>
      <label className={s.label}>
        Find contacts by name
        <input
          placeholder="type name"
          className={s.input}
          type="text"
          name="filter"
          title="Search contacts"
          value={value}
          onChange={onChange}
        />
      </label>
    </>
  );
};

FilterContact.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default FilterContact;
