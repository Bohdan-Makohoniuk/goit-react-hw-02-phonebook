import PropTypes from 'prop-types';
import ContactItem from './ContactItem/ContactItem';
import {UlList} from './ContactList.styled';

const ContactList = ({ visibleContacts, deleteContact }) => {
   return (
      <UlList>
         {visibleContacts.map(({ id, name, number }) => (
            <ContactItem
               key={id}
               id={id}
               name={name}
               number={number}
               deleteContact={deleteContact}
            />
         ))}
      </UlList>
   );
};

ContactList.propTypes = {
   visibleContacts: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.string.isRequired,
         name: PropTypes.string.isRequired,
         number: PropTypes.string.isRequired,
      })
   ),
   deleteContact: PropTypes.func.isRequired,
};

export default ContactList;