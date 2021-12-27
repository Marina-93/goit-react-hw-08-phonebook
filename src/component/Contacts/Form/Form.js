import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../../redux/contacts/selectors';
import { addContact }from '../../../redux/contacts/operations';
import PropTypes from 'prop-types';
import './Form.css';

export default function Form() {
    const [name, setNeme] = useState('');
    const [number, setNumber] = useState('');
    const contacts = useSelector(getContacts);
    const dispatch = useDispatch();
  
    const handleChange = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case 'name':
                setNeme(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default: return;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        if (contacts.find((contact) => contact.name === name)) {
            alert(`${name} is already in contacts`);
            return;
        }
        dispatch(addContact({ name, number }));
        reset();
    }

    const reset = () => {
        setNeme('');
        setNumber('');
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <label className="label">
                Name
                <input
                    className="input"
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                />
            </label>
            
            <label className="label">
                Number
                <input
                    className="input"
                    type="tel"
                    name="number"
                    value={number}
                    onChange={handleChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                />
            </label>
            
            <button className="button" type="submit">Add contact</button>
        </form>
    )
}

Form.propTypes = {
    name: PropTypes.string,
    number: PropTypes.number,
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func
}