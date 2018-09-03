import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar, Nav, NavItem, ListGroup, ListGroupItem } from 'react-bootstrap';
import './style.css';

export default () => {
	return (
		<aside className="aside">
			<Navbar fluid>
				<Navbar.Header>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<ListGroup>
						<ListGroupItem><Link to="/Portfolio/"> Главная </Link></ListGroupItem>
						<ListGroupItem><Link to="/Portfolio/skill"> Навыки </Link></ListGroupItem>
						<ListGroupItem><Link to="/Portfolio/works"> Работы </Link></ListGroupItem>
						<ListGroupItem><Link to="/Portfolio/contact"> Контакты </Link></ListGroupItem>
					</ListGroup>
				</Navbar.Collapse>
			</Navbar>
		</aside>
		)
}