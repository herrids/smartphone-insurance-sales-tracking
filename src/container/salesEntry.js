import { connect } from "react-redux";
import SalesEntry from "../components/salesEntry";

const mapStateToProps = (state, ownProps) => ({
  sales: state.sales
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

const SalesEntryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SalesEntry);

export default SalesEntryContainer;
