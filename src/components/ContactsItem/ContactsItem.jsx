import {
  Divider,
  ListItem,
  Box,
  Typography,
  Button,
  Avatar,
} from '@mui/material';

export const ContactsItem = ({ contact, deleteHandler, editHandler }) => {
  return (
    <ListItem key={contact.id}>
      <Avatar />
      <Typography variant="body1" component="p">
        <b>
          {contact.name.length < 35
            ? contact.name
            : contact.name.substr(0, 35) + '...'}
          :
        </b>{' '}
        {contact.number}
      </Typography>
      <Box>
        <Button name={contact.id} onClick={editHandler}>
          Edit
        </Button>
        <Button name={contact.id} onClick={deleteHandler}>
          Delete
        </Button>
      </Box>
      <Divider />
    </ListItem>
  );
};
