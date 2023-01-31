import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import styles from './Logo.module.css';
import { Typography, Box } from '@mui/material';

export const Logo = () => {
  return (
    <Box className={styles.box}>
      <ContactPhoneIcon />
      <Typography variant="h5" component="h1" color="inherit">
        Phonebook
      </Typography>
    </Box>
  );
};
