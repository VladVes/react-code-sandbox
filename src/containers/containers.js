import { connect } from "react-redux";

import * as actions from "../actions/actions";
import TestComponent from "../components/TestComponent.jsx";
import {
  tasksSelector,
  usersSelector,
  usersStateSelector
} from "../selectors/selectors";

const mapStateToProps = state => {
  console.log('tasks: ', tasksSelector(state));
  return ({
  tasks: tasksSelector(state),
  usersState: usersStateSelector(state),
  users: usersSelector(state),
  counter: state.counter
});
};

// если пробрасывать actions таким образом то можно более гибко их
// испльзовать, т.е. превращать в более сложные функции, к примеру диспатчить
// сразу несколько actions
const mapDispatchToProps = dispatch => ({
  addTask: payload => dispatch(actions.addTask(payload)),
  updateCounter: payload => dispatch(actions.updateCounter(payload)),
  getUser: () => dispatch(actions.getUser())
});

const actionsToConnect = {
  addTask: actions.addTask
};

export default connect(
  mapStateToProps,
  // actionsToConnect // происходит оборачивание Actions что позволяет обходиться без функции dispatch в компоненте
  mapDispatchToProps
)(TestComponent);
