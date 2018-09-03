import React from 'react';
import { Panel } from 'react-bootstrap';
import './style.css';

export default () => {
	return (
			<div className="about">
				<h1 className="text-center">Коротко о себе</h1>
				<Panel>
					<Panel.Heading>
						Немного о себе:
					</Panel.Heading>
					<Panel.Body>
						Опыт верстки более 3-х лет.<br />
						2 года работал удаленно на веб-студию (верстал макеты ).<br />
						Постоянно развиваюсь стараюсь изучать что-то новое.<br />
						Сейчас изучаю JS, ReactJS планирую перейти на фронтенд. <br />
						<p className="text-danger">Портфолио сделано SPA с использованием технологий  ReactJS, react-router, react-bootstrap3</p>
						На данный момент ищу работу на удаленной основе (хотя-бы на первое время испытательный срок, при положительном сотрудничестве готов к работе в офисе) или проектно. 
					</Panel.Body>
				</Panel>
			</div>
		)
}