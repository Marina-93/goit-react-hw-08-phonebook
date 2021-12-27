import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../../redux/contacts/selectors';
import { filterContacts } from '../../../redux/contacts/actions';
import PropTypes from "prop-types";
import './Filter.css';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <label className="filter-label">
      Find contacts by name
      <input
        className="filter-input"
        value={value}
        onChange={handleChange}
        type="text"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
    </label>
  )
}


Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
}