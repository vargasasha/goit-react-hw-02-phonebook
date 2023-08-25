import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onAddContact = newContact => {

    if (
      this.state.contacts.some(
        contact =>
          contact.name.toLocaleLowerCase() === newContact.name.toLocaleLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts`);
    }
    else {
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, newContact],
        };
      });
    }
    
  };

  onFilterName = filterName => {
    this.setState(() => {
      return {
        filter: filterName,
      };
    });
  };

  onDeleteContact = oldContact => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== oldContact
        ),
      };
    });
  };

  render() {
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm onAdd={this.onAddContact} />

        <h2>Contacts </h2>
        <Filter filter={this.state.filter} onFilter={this.onFilterName} />
        <ContactList
          contacts={visibleContacts}
          onDelete={this.onDeleteContact}
        />
      </div>
    );
  }
}
