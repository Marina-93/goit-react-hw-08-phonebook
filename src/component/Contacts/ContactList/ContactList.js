import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, removeContact } from '../../../redux/contacts/operations';
import { getFilterContacts } from '../../../redux/contacts/selectors';
import PropTypes from "prop-types";
import './ContactList.css';

export default function ContactList() {
  const contacts = useSelector(getFilterContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className="list">
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button
            className="button-list"
            type="button"
            onClick={() => dispatch(removeContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}


ContactList.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number
}