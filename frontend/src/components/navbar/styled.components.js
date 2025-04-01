import { Box, styled, Toolbar } from "@mui/material";

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
});

const Search = styled('div')(({theme}) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%'
}));

const Icons = styled(Box)(({theme}) => ({
  display: 'none',
  gap: '15px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    display: 'flex'
  }
}));

const UserBox = styled(Box)(({theme}) => ({
  display: 'none',
  gap: '10px',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    display: 'flex'
  }
}));

export {
  StyledToolbar, Search, Icons, UserBox
};
