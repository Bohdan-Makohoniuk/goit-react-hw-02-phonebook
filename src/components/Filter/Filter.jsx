import PropTypes from 'prop-types';
import {Contct_Input} from './Filter.styled';

const Filter = ({ filter, onChange }) => {
   return (
      <label>
         Find contact by name
         <Contct_Input type="text" name="filter" value={filter} onChange={onChange} />
      </label>
   );
};

Filter.propTypes = {
   filter: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired,
};

export default Filter;