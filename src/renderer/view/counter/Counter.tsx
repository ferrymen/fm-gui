import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Counter from "../../component/counter/counter";
import { actionCreators } from "../../redux/action/counter";
import { IRootState } from "../../redux/reducer";

function mapStateToProps(state: IRootState) {
  return {
    counter: state.Counter.counter,
  };
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
