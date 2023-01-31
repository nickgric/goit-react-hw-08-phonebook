import { Typography, Container } from '@mui/material';

export const Section = ({ title, children }) => {
  return (
    <>
      <Container maxWidth="sm" component="section">
        {title && (
          <Typography
            variant="h4"
            component="h2"
            color="primary"
            sx={{ marginBottom: '16px' }}
          >
            {title}
          </Typography>
        )}
        {children}
      </Container>
    </>
  );
};
