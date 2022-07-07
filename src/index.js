import React from 'react';
import reactDom from 'react-dom';
import css from './index.module.css';
import scss from './index.module.scss';
import './index.css';
import './index.scss';
import img from './assets/commander.png'

const App = () => (
  <div
  className={`
   css
   scss
   ${css['module-css']}
   ${scss['module-scss']}
 `}
  >
   <img src={img} alt="" />
  </div>
);
reactDom.render(<App/>, document.getElementById('root'));
