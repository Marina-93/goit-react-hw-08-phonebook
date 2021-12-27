import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactForm from '../../component/Contacts/Form/Form';
import Filter from '../../component/Contacts/Filter/Filter';
import ContactList from '../../component/Contacts/ContactList/ContactList';
import { fetchContacts } from '../../redux/contacts/operations';
import './Contacts.css';

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1 className='title'>Phonebook</h1>
      <ContactForm />
      <h2 className='title'>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}