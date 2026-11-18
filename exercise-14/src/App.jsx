
import React, { useReducer, useState } from 'react';

import ContactForm from './ContactForm';
import ContactList from './ContactList';

import {
  reducer,
  initialState,
} from './reducer';

const App = () => {
  const [contacts, dispatch] = useReducer(
    reducer,
    initialState
  );

  const [editingContact, setEditingContact] = useState(null);

  return (
    <div>
      <h1>Contact Manager</h1>

      <ContactForm
        dispatch={dispatch}
        editingContact={editingContact}
        setEditingContact={setEditingContact}
      />

      <ContactList
        contacts={contacts}
        dispatch={dispatch}
        setEditingContact={setEditingContact}
      />
    </div>
  );
};

export default App;
