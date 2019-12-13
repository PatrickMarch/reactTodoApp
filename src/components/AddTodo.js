import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        title: ''
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''});
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});
    
    render() {
        return (
            <form onSubmit ={this.onSubmit} style={{display:'flex'}}>
                <input 
                type="text"
                name="title"
                placeholder="add Todo ..."
                style={{flex:'10',padding:'5px'}}
                // this needs to also take in the value and allow it to change but it can't currently with this code
                onChange = {this.onChange}
                />
                <input 
                type="submit"
                value="Submit"
                className= "btn"
                style={{flex:'1'}}
                />
            </form>
        )
    }
}

//propTypes
    AddTodo.propTypes = {
        addTodo: PropTypes.func.isRequired
        
    }


export default AddTodo
