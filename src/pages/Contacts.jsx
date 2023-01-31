import { useState } from 'react';

import { Section } from '../components/Section';
import { AddContact } from '../components/AddContact';
import { ContactsFilter } from '../components/ContactsFilter';
import { ContactsList } from '../components/ContactsList';
import { EditContactForm } from '../components/EditContactForm';

const Contacts = () => {
  const [form, setForm] = useState(false);
  return (
    <>
      <Section title="Contacts">
        <ContactsFilter />
        <ContactsList setForm={setForm} />
      </Section>
      {form && (
        <Section title="Edit contact">
          <EditContactForm setForm={setForm} />
        </Section>
      )}
      <Section title="Add contact">
        <AddContact />
      </Section>
    </>
  );
};

export default Contacts;
