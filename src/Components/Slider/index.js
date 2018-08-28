import React from 'react';
import { Carousel } from 'react-bootstrap';

class Slider extends React.Component {
   
	render () {
		let {slides} = this.props;
		console.log(slides);
		const tmp = slides.map((item,index) => <Carousel.Item key={index}> <img src={item} alt="slider" /> </Carousel.Item>);
		return (
			<Carousel>
				{tmp}
			</Carousel>
		)
	}
	
}

export default Slider;