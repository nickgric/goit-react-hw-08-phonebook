import { AppBar, Container, Toolbar, Box } from '@mui/material';
import { AuthMenu } from 'components/AuthMenu';
import { Navigation } from 'components/Navigation';
import { Logo } from 'components/Logo';

export const HeaderBar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Logo />
            <Navigation />
          </Box>
          <AuthMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
