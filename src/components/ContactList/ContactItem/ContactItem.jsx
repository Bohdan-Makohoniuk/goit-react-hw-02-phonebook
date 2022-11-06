import PropTypes from 'prop-types';
import {LiItem, Btn} from './ContactItem.styled';

const ContactItem = ({ id, name, number, deleteContact }) => {
   return (
      <LiItem id={id}>
         {name}: {number}
         <Btn
            type="button"
            onClick={() => deleteContact(id)}
         >
            Delete
         </Btn>
      </LiItem>
   );
};
ContactItem.propType = {
   id: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   number: PropTypes.string.isRequired,
   deleteContact: PropTypes.func.isRequired,
};
export default ContactItem;