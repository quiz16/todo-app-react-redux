'use strict';

const addTodo = ( action ) => {
	return {
		'type'     : 'ADD_TODO',
		'id'       : action.id,
		'text'     : action.text,
		'complete' : false,
		'remove'   : false
	};
};

const toggleTodo = ( id ) => {
	return {
		'type' : 'TOGGLE_TODO',
		'id'   : id
	};
};

const removeTodo = ( id ) => {
	return {
		'type' : 'REMOVE_TODO',
		'id'   : id
	};
};

export { addTodo, toggleTodo, removeTodo };
