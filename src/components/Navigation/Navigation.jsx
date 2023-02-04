import { StyledLink } from 'components/common/StyledLink';
import { useAuth } from 'hooks';
import {
  // HomeStyledLink,
  Nav,
} from './Navigation.styled';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <ContactPhoneIcon sx={{ mr: 2 }} color="warning" />
      <StyledLink style={{ marginRight: '20px' }} to="/">
        Home
      </StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </Nav>
  );
};
