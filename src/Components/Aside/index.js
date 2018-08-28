import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import './style.css';

export default () => {
	return (
		<aside>
			<ListGroup>
				{/*<ListGroupItem><Link to="/Portfolio/"> Навыки </Link></ListGroupItem>
				<ListGroupItem><Link to="/Portfolio/works"> Работы </Link></ListGroupItem>
				<ListGroupItem><Link to="/Portfolio/contact"> Контакты </Link></ListGroupItem>*/}
				<ListGroupItem><Link to="/"> Навыки </Link></ListGroupItem>
				<ListGroupItem><Link to="/works"> Работы </Link></ListGroupItem>
				<ListGroupItem><Link to="/contact"> Контакты </Link></ListGroupItem>
			</ListGroup>
		</aside>
		)
}