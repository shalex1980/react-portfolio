import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import './style.css';

export default () =>  {
	return (
		<div>
			<h1 className="text-center">Контакты</h1>
      <div class="animate">
      	<CSSTransitionGroup component="div" className="skype">
      		<h2><span>S</span><span>k</span><span>y</span><span>p</span><span>e</span></h2>
      		<h4><span>s</span><span>h</span><span>a</span><span>l</span><span>e</span><span>x</span><span>s</span><span>a</span><span>n</span><span>d</span><span>r</span><span>1</span><span>9</span><span>8</span><span>0</span></h4>
      	</CSSTransitionGroup>
      </div>
		</div>
		)
}