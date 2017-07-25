'use strict';

import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from 'react-dom';
import { TodoList, FooterLink } from './js/container';
import { reducer } from './js/reducer';
import { TodoComp, FooterComp } from './js/components';

const store = createStore( reducer );

render(
	<Provider store={store}>
		<HashRouter>
			<div>
				<FooterComp />
				<Route exact path='/' component={ TodoList }></Route>
				<Route exact path='/completed' component={ TodoList }></Route>
				<Route exact path='/inprogress' component={ TodoList }></Route>
				<Route exact path='/deleted' component={ TodoList }></Route>
			</div>
		</HashRouter>
	</Provider>,
	document.getElementById( 'root' )
);
