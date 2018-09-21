import React from 'react';
//import { CSSTransitionGroup } from 'react-transition-group';
import './style.css';

export default () =>  {
  return (
    <div>
      <h1 className="text-center">Контакты</h1>
      <div className="animate">
        <div className="skype">
          <h2><span>S</span><span>k</span><span>y</span><span>p</span><span>e</span></h2>
          <h4  className="skype__title"><span>s</span><span>h</span><span>a</span><span>l</span><span>e</span><span>x</span><span>s</span><span>a</span><span>n</span><span>d</span><span>r</span><span>1</span><span>9</span><span>8</span><span>0</span></h4>
        </div>
        <div className="telegram">
          <h2><span>T</span><span>e</span><span>l</span><span>e</span><span>g</span><span>r</span><span>a</span><span>m</span></h2>
          {/*<h4 className="telegram__title"><span>+</span><span>3</span><span>8</span><span>0</span><span>9</span><span>5</span><span>8</span><span>0</span><span>9</span><span>6</span><span>3</span><span>2</span><span>8</span></h4>*/}
          <h4 className="telegram__title"><span>A</span><span>l</span><span>e</span><span>k</span><span>_</span><span>S</span><span>h</span></h4>
        </div>
      </div>
    </div>
    )
}