import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Skill from './../Skill';
import { skills } from './../../Data';
import './style.css';


export default () =>  {
	console.log(skills);
	const tmp = skills.map(item => <Skill skill={item} key={item.id} />)
	return (
			<section>
				<h2 className="text-center">Мои навыки</h2>
				<ReactCSSTransitionGroup
					transitionName="example"
					transitionAppear={true}
					transitionAppearTimeout={1000}
					transitionEnter={false}
					transitionLeave={false}
					>
					{tmp}
				</ReactCSSTransitionGroup>
			</section>
		)
}