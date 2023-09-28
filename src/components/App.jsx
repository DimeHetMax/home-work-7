import { useDispatch, useSelector} from "react-redux";
import { getContacts } from "redux/selectors";
// import { addContacts } from "redux/actions";
import { addContacts } from "redux/contactsSlice";

import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

import "../index.css"

export const App = () => {
  const contacts = useSelector(getContacts)
  const dispatch = useDispatch();

  const addContact = (event) => {
    event.preventDefault()
    const name = event.target.elements.name.value;
    const phone = event.target.elements.number.value;
    const existingContact = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
    if (existingContact) {
      alert('This name already exists in the phonebook!');
      return;
    }
    dispatch(addContacts(name, phone))
    event.target.reset();
  }
return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter />
      <ContactList/>   
    </div>
  );
}