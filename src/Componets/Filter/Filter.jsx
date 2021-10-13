import { Input } from '../ContactForm/ContactForm.styled';
import { connect } from 'react-redux';
import actions from '../../redux/actions';

function Filter({ filter, onChange }) {
  return (
    <>
      Find contacts by name:
      <Input
        type="text"
        name="filter"
        autoComplete="off"
        value={filter}
        onChange={onChange}
      />
    </>
  );
}

const mapStateToProps = state => {
  return {
    filter: state.contacts.filter,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: e => dispatch(actions.filterItem(e.target.value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
