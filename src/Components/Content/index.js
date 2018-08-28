import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './style.css';
import Home from './../Home';
import Contact from './../Contact';
import Works from './../Works';
import Single from './../Single';


export default () => {
	return (
		<div className="content">
			<Switch>
				{/*<Route exact path="/Portfolio/" component={Home} />
				<Route path="/Portfolio/works/:id" component={Single} />
				<Route path="/Portfolio/works" component={Works} />
				<Route path="/Portfolio/contact" component={Contact} />	*/}
				<Route exact path="/" component={Home} />
				<Route path="/works/:id" component={Single} />
				<Route path="/works" component={Works} />
				<Route path="/contact" component={Contact} />
			</Switch>
		</div>
		)
}