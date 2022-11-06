import PropTypes from 'prop-types';
import {Li_Item, Btn} from './ContactItem.styled';

const ContactItem = ({ id, name, number, deleteContact }) => {
   return (
      <Li_Item id={id}>
         {name}: {number}
         <Btn
            type="button"
            onClick={() => deleteContact(id)}
         >
            Delete
         </Btn>
      </Li_Item>
   );
};
ContactItem.propType = {
   id: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   number: PropTypes.string.isRequired,
   deleteContact: PropTypes.func.isRequired,
};
export default ContactItem;