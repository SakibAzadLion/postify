import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreator from "../actions/actionCreator";
import App from "./App";

function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments
    }
}

function mapDispachtoProps(dispatch) {
    return bindActionCreators(actionCreator, dispatch);
}

const Main = connect(mapStateToProps, mapDispachtoProps)(App);

export default Main;
