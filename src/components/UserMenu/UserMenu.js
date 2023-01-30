import { useDispatch } from 'react-redux';
import { BsFillPersonCheckFill } from 'react-icons/bs';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import {
  IconButton,
  UserName,
  UserNavWrap,
  UserNavWelcomeText,
  IconSvg,
} from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserNavWrap>
      <BsFillPersonCheckFill fill="#000" />
      <UserNavWelcomeText>
        Welcome, <UserName>{user.name}</UserName>
      </UserNavWelcomeText>
      <IconButton
        type="button"
        aria-label="logout"
        onClick={() => dispatch(logOut())}
      >
        <IconSvg />
      </IconButton>
    </UserNavWrap>
  );
};
