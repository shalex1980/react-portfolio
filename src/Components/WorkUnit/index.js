import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Panel, Image, Modal} from 'react-bootstrap';
import Loader from './../Loader';
import './style.css';

class WorkUnit extends React.Component {
	constructor(props, { match }) {
		super(props);

		this.state = {
			show: false,
			loaded: false,
		};
	}

	static propTypes = {
		unit: PropTypes.shape({
			id: PropTypes.string,
			type: PropTypes.string,
			name: PropTypes.string,
		})
	}

	handleClose = () => {
		this.setState({show: false});
	}

	handleShow = () => {
		this.setState({show: true});
	}

	handleLoadImg = () => {
		console.log('Loaded');
		this.setState({loaded: true})
	}

	render() {
		const {unit} = this.props;
		return (
				<article className="work-block">
					<Panel onClick={this.handleShow}>
						<Panel.Heading>{unit.type}</Panel.Heading>
						<Panel.Body>
							<Loader hide={this.state.loaded}/>
							<Image src={unit.img} className={this.state.loaded ? ' ' : 'hidden'} onLoad={this.handleLoadImg} responsive />
						</Panel.Body>
						<Panel.Footer>
							<ul>
								{unit.metods.map((item, index) => <li key={index}>{item}</li>)}
							</ul>
						</Panel.Footer>
					</Panel>
					<Modal className="work-dialog" show={this.state.show} onHide={this.handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>{unit.name}</Modal.Title>
						</Modal.Header>
	 					<Modal.Body>
							<Image src={unit.img} responsive />
							<Link className="modal-more" to={`/works/${unit.id}`}><span>Подробнее...</span></Link>
						</Modal.Body>
					</Modal>
				</article>
				
			)
	}
}

export default WorkUnit;