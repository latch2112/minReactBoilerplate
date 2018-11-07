import React from 'react';
import ReactDOM from 'react-dom';

const title = 'My Minimal React Webpack Babel Setup !!';

ReactDOM.render(
<div>{title}</div>,
document.getElementById('app')
);


const es6Test = "React Webpack Babel";
console.log(`My Minimal ${es6Test} Setup !!`);

module.hot.accept();