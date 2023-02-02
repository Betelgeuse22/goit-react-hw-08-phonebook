import {
  ContactName,
  Contactlist,
  ContactItem,
  TitelContact,
} from './Contact.styled';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { Button } from '@mui/material';

export const Contacts = () => {
  const { items, isLoading, error } = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();
  const onRemoveContact = contactId => dispatch(deleteContact(contactId));

  const getVisibleContacts = () => {
    return items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      {getVisibleContacts().length > 0 && !isLoading ? (
        <Contactlist>
          {error && <b>{error}</b>}
          {getVisibleContacts().map((contact, id) => (
            <ContactItem key={id}>
              <ContactName>{contact.name + ' : ' + contact.number}</ContactName>
              {
                <Button
                  type="button"
                  variant="contained"
                  onClick={() => onRemoveContact(contact.id)}
                >
                  Delete
                </Button>
              }
            </ContactItem>
          ))}
        </Contactlist>
      ) : (
        <TitelContact>It's empty here</TitelContact>
      )}
    </>
  );
};
