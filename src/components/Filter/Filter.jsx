import PropTypes from 'prop-types';
import {ContactInput} from './Filter.styled';

const Filter = ({ filter, onChange }) => {
   return (
      <label>
         Find contact by name
         <ContactInput type="text" name="filter" value={filter} onChange={onChange} />
      </label>
   );
};

Filter.propTypes = {
   filter: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired,
};

export default Filter;