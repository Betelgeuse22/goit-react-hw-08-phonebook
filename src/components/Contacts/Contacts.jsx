import { ContactName, TitelContact } from './Contact.styled';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { Grid, List, ListItem, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

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
        <Grid>
          <List>
            {error && <b>{error}</b>}
            {getVisibleContacts().map((contact, id) => (
              <ListItem key={id}>
                <ContactName>
                  {contact.name + ' : ' + contact.number}
                </ContactName>
                {
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => onRemoveContact(contact.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              </ListItem>
            ))}
          </List>
        </Grid>
      ) : (
        <TitelContact>It's empty here</TitelContact>
      )}
    </>
  );
};
