'use strict';

import { connect } from 'react-redux';
import { TodoComp } from './components';
import { addTodo, toggleTodo, removeTodo } from './actions';

const filterTodo = ( state, route ) => {
	if ( route === '/completed' ) {
		return state.filter( todo => {
			return todo.complete === true;
		} );
	}

	if ( route === '/deleted' ) {
		return state.filter( todo => {
			return todo.remove === true;
		} );
	}

	if ( route === '/inprogress' ) {
		return state.filter( todo => {
			return !( todo.remove || todo.complete );
		} );
	}
	return state;
};

const TodoList = connect(
	function mapStateToProps ( state, props ) {
		return {
			'todos' : filterTodo( state, props.match.path )
		}
	},

	function mapDispatchToProps ( dispatch ) {
		return {
			'addTodo'    : text => dispatch( addTodo( text ) ),
			'toggleTodo' : id => dispatch( toggleTodo( id ) ),
			'removeTodo' : id => dispatch( removeTodo( id ) )
		}
	}
)( TodoComp );

export { TodoList };
