import React from 'react';
import WorkUnit from './../WorkUnit';
import {Pagination} from 'react-bootstrap';
import {works} from './../../Data';
import './style.css';

class Works extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			countOnPage: 6,
			page : 1
		}
		this.handleClick = this.handlePagin.bind(this);
	}

	handlePagin(page) {
		return () =>  {
			this.setState({page: page});
		}
	}

	getUnitsOnPage() {
		let from = this.state.page !== 1 ?  ((this.state.page - 1) * this.state.countOnPage - 1 ) : 0 ;
		let to = works.length > (from + this.state.countOnPage ) ? (from + this.state.countOnPage ) : works.length;
		const tmp = [];
			for(let i = from ; i < to ; i++) {
					tmp.push(<WorkUnit key={works[i].id} unit={works[i]} />);
			}
			return tmp;
	}

	getPages() {
		const pages = works.length / this.state.countOnPage;
		const tmp = [];
				for(let i = 1; i <= pages; i++) {
					tmp.push (
						<Pagination.Item key={ i } 
							active={ i === this.state.page }
							onClick = {this.handlePagin(i)}>
								{i}
						</Pagination.Item>
						)
				}
				return tmp;
	}

	render () {

		return (
				<section id="works" className="works">
					<h1 className="text-center">Мои работы</h1>
					<div className='works-wrap'>
							{this.getUnitsOnPage(works)}
					</div>
					<div className="works-pagin">
						<Pagination bsSize="large">
							{this.getPages()}
						</Pagination>
					</div>
				</section>
			)
	}
}


export default Works;