import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchGoogle } from '../actions/index';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = { term: '' };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchGoogle(this.state.term);
        this.setState({ term: '' });
        console.log(this);
    }

    render(){
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    placeholder="Search three engines at once"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange} 
                />
            </form>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchGoogle }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);