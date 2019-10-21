import { connect } from "react-redux";
import SalesVisualization from "../components/salesVisualization";


const mapStateToProps = (state, ownProps) => ({
  salesData: state.salesData
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

const SalesVisualizationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SalesVisualization);

export default SalesVisualizationContainer;
