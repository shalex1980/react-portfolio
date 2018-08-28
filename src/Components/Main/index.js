import React from 'react';
import Aside from './../Aside';
import Content from './../Content';
import './style.css';

export default () => {
	return (
		<main>
		  <div className="main__flex">
			  <Aside />
				<Content />
		  </div>
		</main>
		)
}