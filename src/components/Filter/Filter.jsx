import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/filterSlice';
import { TextField } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onChangeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <>
      <TextField
        fullWidth
        margin="normal"
        label="Find contacts by name"
        variant="standard"
        type="text"
        value={filter}
        onChange={onChangeFilter}
      />
    </>
  );
};
