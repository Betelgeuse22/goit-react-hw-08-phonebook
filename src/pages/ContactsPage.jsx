import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { Form } from '../components/Form/Form';
import { Contacts } from '../components/Contacts/Contacts';
import { Filter } from '../components/Filter/Filter';
import {
  AppSection,
  TitelPhone,
  TitelContact,
} from '../components/Contacts/Contact.styled';
import { fetchContacts } from 'redux/contacts/operations';

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <AppSection>
      <Toaster />
      <TitelPhone>Phonebook</TitelPhone>
      <Form />
      <TitelContact>Contacts</TitelContact>
      <Filter />
      <Contacts />
    </AppSection>
  );
}
