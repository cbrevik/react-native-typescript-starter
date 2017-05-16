import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import Counter from '../components/Counter';
import * as CounterActions from '../redux/counter/actions';
import { connect } from 'react-redux';

interface Props {
    count: number,
    increment: () => any,
    decrement: () => any
}

class CounterContainer extends Component<Props, {}> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Counter
                {...this.props} />
        );
    }
}

export default connect(state => ({
    count: state.counter.count
}), (dispatch) => ({
    increment: () => dispatch(CounterActions.increment()),
    decrement: () => dispatch(CounterActions.decrement())
}))(CounterContainer);