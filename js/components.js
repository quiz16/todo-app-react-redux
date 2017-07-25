'use strict';

import React from 'react';
import { NavLink } from 'react-router-dom';

let idCount = 0;
let style   = {
	'pointer' : {
		'cursor' : 'pointer'
	},
	'size' : {
		'fontSize' : '18px'
	},
	'sSize' : {
		'fontSize' : '12px'
	},
	'inline' : {
		'display' : 'inline-block'
	},
	'margin' : {
		'marginLeft' : '5px'
	}
};

const Todo = ( props ) => {
	const { todo, toggle } = props;
	if( todo.complete ) {
		return (
			<div style={{ ...style.inline, 'color' : todo.remove ? 'red' : 'inherit' }} onClick={ toggle }>
				<strike title="mark as incomplete" style={{ ...style.pointer, ...style.size }}>{ todo.text }</strike>
			</div>
		);
	}
	return (
		<div style={{ ...style.inline, 'color' : todo.remove ? 'red' : 'inherit' }} onClick={ toggle }>
			<span title="mark as complete" style={{ ...style.pointer, ...style.size }}>{ todo.text }</span>
		</div>
	);
};

const TodoComp = ( props ) => {
	let input;
	const { todos, addTodo, toggleTodo, removeTodo, match } = props;

	const submitTodo = ( event ) => {
		if ( event.which === 13 ) {
			return clickAdd( event );
		}
	};

	const clickAdd = ( event ) => {
		event.preventDefault();
		addTodo( {
			'id'   : idCount++,
			'text' : input.value
		} );
		input.value = '';
		input.focus();
	};

	const clickToggle = ( id ) => ( event ) => {
		event.preventDefault();
		toggleTodo( id );
	};

	const clickRemove = ( id ) => ( event ) => {
		event.preventDefault();
		removeTodo( id );
	};

	return (
		<div>
			<div style={{ 'width' : '500px' }}>
				<input type='text' placeholder='Add todo here'
					className="form-control" autoFocus onKeyPress={ submitTodo }
					style={{ 'display' : 'inline-block', 'width' : '80%' }}
					ref={ node => {
						input = node;
					}}
				/>
				<button onClick={ clickAdd } className="btn btn-default"
					style={{ 'display' : 'inline-block', 'width' : '20%' }}>Add</button>
			</div>
				<ul style={{ 'display' : todos.length ? 'block' : 'none' }}>
					{ todos.map( item => (
						<li key={ item.id }>
							<div>
								<Todo todo={ item } toggle={ clickToggle( item.id ) } />
								<i className="glyphicon glyphicon-remove" title="Delete"
									style={{ ...style.pointer, ...style.sSize, ...style.margin }}
									onClick={ clickRemove( item.id ) }>
								</i>
							</div>
						</li>
					) ) }
				</ul>
				<div style={{ 'display' : todos.length ? 'none' : 'block' }}>
					<h4>Empty Todo list</h4>
				</div>
		</div>
	);
};

const FooterComp = ( props ) => {
	return (
		<div>
			<NavLink exact to='/'>All Todo</NavLink>
			&nbsp;|&nbsp;
			<NavLink to='/inprogress'>Inprogress Todo</NavLink>
			&nbsp;|&nbsp;
			<NavLink to='/completed'>Done Todo</NavLink>
			&nbsp;|&nbsp;
			<NavLink to='/deleted'>Trash Bin</NavLink>
		</div>
	);
};

export { TodoComp, FooterComp };
