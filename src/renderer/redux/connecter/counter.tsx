import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ViewCounter from "../../view/counter/counter";
import { actionCreators } from "../action/counter";
import { IRootState } from "../reducer";

function mapStateToProps(state: IRootState) {
  return {
    counter: state.Counter.counter,
  };
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewCounter);
