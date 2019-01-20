import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ViewHome from "../../view/home/Home";
import { ActionCreatorHome } from "../action/home";
import { IRootState } from "../reducer";

function mapStateToProps(state: IRootState) {
  return {
    projects: state.Home.projects,
  };
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(ActionCreatorHome, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewHome);
