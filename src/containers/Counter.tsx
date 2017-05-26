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
    intervalId: number;

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            this.props.increment();
        }, 1000)
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