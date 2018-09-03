import React from 'react';
import {Image} from 'react-bootstrap';
import { LOGO, NAME, PROF } from './../../Data/constants';
import './style.css';
import Avatar from 'assets/img/avatar_2.jpg';

export default () => {
	return (
		<header className="header">
			<div className="header-logo">{LOGO}</div>
			<div className="header-prof">
				<div className="header-prof__img">
					<Image src={Avatar} rounded responsive />
				</div>
				<div className="header-prof__body">
					<p>{NAME}</p>
					<p>{PROF}</p>
				</div>
			</div>
		</header>
		)
}