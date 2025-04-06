import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactList from "../components/ContactList/ContactList";
import { useState } from "react";
import css from "./App.module.css"
import initialContacts from "../../contacts.json"



const App = () => {
    const [contacts, setContacts] = useState(initialContacts);

    const addContact = (newContact) => {
        setContacts ((prev) => {
          return [...prev, newContact]
        })
    }

    const [filter, setFilter] = useState("");
    const filterContacts = contacts.filter(contact => contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()));

  return (
    <>
    <div className={css.block}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact}/>
      <SearchBox value={filter} onFilter={setFilter}/>
      <ContactList contacts={filterContacts}/>
    </div>
    </>
  );
};




export default App;