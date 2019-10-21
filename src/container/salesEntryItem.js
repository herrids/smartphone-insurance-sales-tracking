import { connect } from "react-redux";
import SalesEntryItem from "../components/salesEntryItem";
import {editItem, deleteItem} from "../actions/salesTool"



const mapStateToProps = (state, ownProps) => ({
  item: ownProps.item,
  sales: ownProps.sales,
  salesData: state.salesData,
  index: ownProps.index
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  editItem: item => dispatch(editItem(item)),
  deleteItem: (index, sales, salesData) => dispatch(deleteItem(index, sales, salesData))
});

const SalesEntryItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SalesEntryItem);

export default SalesEntryItemContainer;
