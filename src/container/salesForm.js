import { connect } from "react-redux";
import SalesForm from "../components/salesForm";
import {updateItem, saveChanges, getSmartphones} from "../actions/salesTool"

const mapStateToProps = (state, ownProps) => ({
  smartphones: state.smartphones,
  invalidInput: state.invalidInput,
  item: state.item,
  sales: state.sales,
  salesData: state.salesData,
  selectValue: state.selectedSmartphone
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    updateFormInput: (item, key, event) => dispatch(updateItem(updateObject(item, key, event.target))),
    saveChanges: (item, sales, salesData) => dispatch(saveChanges(item, sales, salesData)),
    getSmartphones: () => getSmartphones(dispatch)
});

const updateObject = (item, key, field) => {
  const copyObject = Object.assign({}, item);
  copyObject[key] = field.value;
  return copyObject;
}

const SalesFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SalesForm);

export default SalesFormContainer;
