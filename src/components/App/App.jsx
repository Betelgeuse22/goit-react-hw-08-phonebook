import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Form from '../Form/Form';
import Contacts from '../Contacts/Contacts';
import Filter from '../Filter/Filter';
import { AppSection, TitelPhone, TitelContact } from './App.styled';
import { GlobalStyle } from '../GlobalStyle';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <AppSection>
      <GlobalStyle />
      <Toaster />
      <TitelPhone>Phonebook</TitelPhone>
      <Form />
      <TitelContact>Contacts</TitelContact>
      {isLoading && !error && <b>Reqest in progress...</b>}
      <Filter />
      <Contacts />
    </AppSection>
  );
}

export default App;
