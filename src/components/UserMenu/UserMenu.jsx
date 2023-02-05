import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { UserNavWrap, UserNavWelcomeText } from './UserMenu.styled';
import { Avatar, IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  function stringAvatar(name) {
    return {
      children: `${user.name.split(' ')[0][0]}${user.name.split(' ')[0][1]}`,
    };
  }

  return (
    <UserNavWrap>
      <UserNavWelcomeText>
        <p>Welcome</p>
        <Avatar
          {...stringAvatar(user.name)}
          sx={{
            bgcolor: '#ed6c02',
            width: 35,
            height: 35,
            ml: 2,
          }}
        />
      </UserNavWelcomeText>
      <IconButton
        edge="end"
        aria-label="logout"
        onClick={() => dispatch(logOut())}
      >
        <LogoutIcon color="warning" />
      </IconButton>
    </UserNavWrap>
  );
};
