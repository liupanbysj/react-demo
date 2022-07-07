import React from 'react';
import reactDom from 'react-dom';
import css from './index.module.css';
import scss from './index.module.scss';
import './index.css';
import './index.scss';


const App = () => (
  <div
  className={`
   css
   scss
   ${css['module-css']}
   ${scss['module-scss']}
 `}
  >
    test page
  </div>
);
reactDom.render(<App/>, document.getElementById('root'));
