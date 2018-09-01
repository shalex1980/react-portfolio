import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
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
					<CSSTransitionGroup component="div"
						transitionName="animate"
						transitionAppear={true}
						transitionAppearTimeout={3000}
						transitionEnter={false}
						transitionLeave={false}
					>
						<div className="star-wrap">
							{temp}
						</div>
					</CSSTransitionGroup>
				</Panel.Body>
			</Panel>
		)
}