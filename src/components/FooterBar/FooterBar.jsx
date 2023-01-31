import { Container } from '@mui/system';
import { Divider, Typography } from '@mui/material';
import AlternateEmailSharpIcon from '@mui/icons-material/AlternateEmailSharp';
import { Section } from 'components/Section';

export const FooterBar = () => {
  return (
    <>
      <Divider />
      <Section>
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="body2">2023</Typography>
          <AlternateEmailSharpIcon />
          <Typography variant="body2">nickgric</Typography>
        </Container>
      </Section>
    </>
  );
};
