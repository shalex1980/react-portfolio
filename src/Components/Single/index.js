import React from 'react';
import {Link} from 'react-router-dom';
import { Panel, Image,/* Button,*/ Glyphicon } from 'react-bootstrap';
import Slider from './../Slider';
import { works } from './../../Data';
import './style.css';

export default ({match}) => {
	const {id} = match.params;
	const unit = works.filter(item => item.id === id )[0];
	console.log(unit);
	return (
		<section className="work-single">
			<Panel>
				<Panel.Heading>
					<h2>{unit.name}</h2>
				</Panel.Heading>
				<Panel.Body>
					<div className="panel-describe row">
						<ul>
							{unit.metods.map((item, index) => <li key={index}>{item}</li>  )}
						</ul>
						<ul className="panel-buttons">
							<li><Link to='/Portfolio/works' className="btn btn-default"><Glyphicon glyph="arrow-left" /> Назад </Link></li>
							<li><a href={unit.source} className="btn btn-default" target='blank'>Сайт <Glyphicon glyph="arrow-right" /></a></li>
						</ul>
					</div>
					{ unit.inner ? <Slider slides={unit.inner} /> : <Image src={unit.img} responsive /> }
				</Panel.Body>
				<Panel.Footer>
					
				</Panel.Footer>
			</Panel>
		</section>
			
		)
}