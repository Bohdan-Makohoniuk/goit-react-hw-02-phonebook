import PropTypes from 'prop-types';
// import s from './ContactItem.module.css';

const ContactItem = ({ id, name, number, deleteContact }) => {
   return (
      <li id={id}>
         {name}: {number}
         <button
            type="button"
            onClick={() => deleteContact(id)}
         >
            Delete
         </button>
      </li>
   );
};
ContactItem.propType = {
   id: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   number: PropTypes.string.isRequired,
   deleteContact: PropTypes.func.isRequired,
};
export default ContactItem;