import { Component } from "react";

export default class CounterC extends Component {
    constructor(props) {
        console.log("CounterC Constructor");
        super(props);
        this.state = {
            count: 0,
            counter: 0,
            loading: true,
        };
    }

    static getDerivedStateFromProps(props, state) {
        console.log("CounterC: getDerivedStateFromProps");
        if (props.counter !== state.counter) return { counter: props.counter };
        return null;
    }

    componentDidMount() {
        console.log("CounterC: ComponentDidMount");
        setTimeout(() => {
            this.setState({ loading: false });
        }, 3000);
    }

    render() {
        console.log("CounterC: render");
        return (
            <>
                {this.state.loading ? (
                    <div>Loading...</div>
                ) : (
                    <div>
                        <p>Count: {this.state.count}</p>
                        <p>Count: {this.state.counter}</p>
                    </div>
                )}
            </>
        );
    }
}