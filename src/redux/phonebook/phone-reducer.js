import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { changeFilter } from './phone-actions';
import operations from './phone-options';

const loading = createReducer(false, {
  [operations.fetchContacts.pending]: () => true,
  [operations.fetchContacts.fulfilled]: () => false,
  [operations.fetchContacts.rejected]: () => false,
  [operations.addContact.pending]: () => true,
  [operations.addContact.fulfilled]: () => false,
  [operations.addContact.rejected]: () => false,
  [operations.deleteContact.pending]: () => true,
  [operations.deleteContact.fulfilled]: () => false,
  [operations.deleteContact.rejected]: () => false,
});

const items = createReducer([], {
  [operations.fetchContacts.fulfilled]: (_, { payload }) => payload,
  [operations.addContact.fulfilled]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [operations.deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [operations.fetchContacts.rejected]: error => console.log(error),
  [operations.fetchContacts.pending]: () => null,
  [operations.addContact.rejected]: error => console.log(error),
  [operations.addContact.pending]: () => null,
  [operations.deleteContact.rejected]: error => console.log(error),
  [operations.deleteContact.pending]: () => null,
});

export default combineReducers({
  loading,
  items,
  filter,
  error,
});