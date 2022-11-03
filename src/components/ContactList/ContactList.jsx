import PropTypes from 'prop-types';
import ContactItem from './ContactItem/ContactItem';
// import s from './ContactList.module.css';

const ContactList = ({ visibleContacts, deleteContact }) => {
   return (
      <ul>
         {visibleContacts.map(({ id, name, number }) => (
            <ContactItem
               key={id}
               id={id}
               name={name}
               number={number}
               deleteContact={deleteContact}
            />
         ))}
      </ul>
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