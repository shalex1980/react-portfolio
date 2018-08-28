import React from 'react';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Panel, Glyphicon } from 'react-bootstrap';
import './style.css';

export default (props) => {
	const {skill }= props;
	const countStars = 10;
	let temp = [];
	for(let i = 0; i < countStars; i++ ) {
		temp.push(<Glyphicon key={i} glyph={(i < skill.rate ? 'star' : 'star-empty')} style={{opacity: 1}}/>);
	}

	return (
			<Panel className="skill">
				<Panel.Heading>{skill.skill}</Panel.Heading>
				<Panel.Body>
					{temp}
				</Panel.Body>
			</Panel>
		)
}