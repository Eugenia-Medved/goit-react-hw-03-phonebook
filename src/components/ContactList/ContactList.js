import React from 'react';
import s from './ContactList.module.css';

function ContactList({ contacts, onDeleteNumber }) {
  return (
    <ol className={s.list}>
      {contacts.map(contact => (
        <li key={contact.id} className={s.item}>
          <span>
            {contact.name}:{contact.number}
          </span>
          <button className={s.button} type="button" onClick={() => onDeleteNumber(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ol>
  );
}

export default ContactList;
