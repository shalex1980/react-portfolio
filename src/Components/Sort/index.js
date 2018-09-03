import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import './style.css';

class Sort extends React.Component {

	render() {
		return(
				<div className="sort">
					<DropdownButton onSelect={this.props.choseShape}
							title='Сортировать по структуре:'
							id={'sort-shape'}
						>
							<MenuItem eventKey="1">Лендинг</MenuItem>
							<MenuItem eventKey="2">Сайт</MenuItem>
					</DropdownButton>
					<DropdownButton onSelect={this.props.choseCount}
							title='Количество на странице:'
							id={'sort-count'}
						>
							<MenuItem eventKey="2">2</MenuItem>
							<MenuItem eventKey="4">4</MenuItem>
							<MenuItem eventKey="6">6</MenuItem>
							<MenuItem eventKey="8">8</MenuItem>
					</DropdownButton>
				</div>
			)
	}
}

export default Sort;