import React from 'react';

export default (props) => {
	return (
	  <div className={props.hide ? 'hidden' : ' '}>
	  	<h1 className="text-center">Loading....</h1>
	  </div>
			
		)
}