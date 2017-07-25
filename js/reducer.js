'use strict';

const reducer = ( state = [], action ) => {
	switch ( action.type ) {
		case 'ADD_TODO' :
			return [
				...state,
				todo( undefined, action )
			];
		case 'TOGGLE_TODO' :
			return state.map( item =>
				todo( item, action )
			);
		case 'REMOVE_TODO' :
			return state.map( item =>
				todo( item, action )
			);
		default :
			return state;
	}
};

const todo = ( state, action ) => {
	switch ( action.type ) {
		case 'ADD_TODO' :
			return {
				'id'       : action.id,
				'text'     : action.text,
				'complete' : action.complete,
				'remove'   : action.remove
			};
		case 'TOGGLE_TODO' :
			if ( state.id !== action.id || state.remove ) {
				return state;
			}

			return {
				...state,
				'complete' : !state.complete
			};
		case 'REMOVE_TODO' :
			if ( state.id !== action.id ) {
				return state;
			}

			return {
				...state,
				'remove' : true
			};
	}
};

export { reducer };
