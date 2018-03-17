import React, { Component } from "react";
import { bindActionCreators } from "redux";
import Counter from "../components/Counter";
import * as CounterActions from "../redux/counter/actions";
import { connect } from "react-redux";
import { Dispatch, AppState } from "../redux";

interface ConnectProps {
  count: number;
}

interface DispatchProps {
  increment: () => any;
  decrement: () => any;
}

class CounterContainer extends Component<ConnectProps & DispatchProps, {}> {
  intervalId: number;

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.props.increment();
    }, 1000);
  }

  render() {
    return <Counter {...this.props} />;
  }
}

export default connect<ConnectProps, DispatchProps>(
  (state: AppState) => ({
    count: state.counter.count,
    sometthing: 0
  }),
  (dispatch: Dispatch) => ({
    increment: () => dispatch(CounterActions.increment()),
    decrement: () => dispatch(CounterActions.decrement())
  })
)(CounterContainer);
