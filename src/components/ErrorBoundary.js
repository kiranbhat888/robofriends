import React, { Component } from 'react';

class ErrorBiundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error,info){
        console.log(error,info);
        this.setState({hasError:true})
    }

    render() {
        return this.state.hasError ? <h1>Error....</h1> : this.props.children;
    }
}

export default ErrorBiundary