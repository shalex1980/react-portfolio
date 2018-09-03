import React from 'react';
import Sort  from '../Sort';
import WorkUnit from './../WorkUnit';
import {Pagination} from 'react-bootstrap';
import {works} from './../../Data';
import './style.css';

class Works extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			shape: 0,
			countOnPage: 6,
			page : 1
		}
		this.handleClick = this.handlePagin.bind(this);
	}

	handlePagin(page) {
		return () =>  {
			this.setState({page});
		}
	}

	handleCountOnPage = (countOnPage) => {
			this.setState({countOnPage : parseInt(countOnPage), page: 1});
	}
	handleChoseShape = (shape) => {
		this.setState({shape : parseInt(shape), page: 1});
	}

	getUnitsOnPage(choseWorks) {
		let from =  (this.state.page - 1) * this.state.countOnPage ;
		let to = (choseWorks.length > (from + this.state.countOnPage ) )? (from + this.state.countOnPage ) : choseWorks.length;

		const tmp = [];
			for(let i = from ; i < to ; i++) {
					tmp.push(<WorkUnit key={choseWorks[i].id} unit={choseWorks[i]} />);
			}
			return tmp;
	}

	getPages(choseWorks) {
		const pages = (choseWorks.length % this.state.countOnPage) ? choseWorks.length / this.state.countOnPage + 1 : choseWorks.length / this.state.countOnPage;
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
		const choseWorks = this.state.shape ? works.filter((item) => item.shape === this.state.shape) : works;
		return (
				<section id="works" className="works">
					<h1 className="text-center">Мои работы</h1>
					<Sort choseShape={this.handleChoseShape} choseCount={this.handleCountOnPage} />
					<div className='works-wrap'>
							{this.getUnitsOnPage(choseWorks)}
					</div>
					<div className="works-pagin">
						<Pagination bsSize="large">
							{this.getPages(choseWorks)}
						</Pagination>
					</div>
				</section>
			)
	}
}


export default Works;