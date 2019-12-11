import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM이 render(출력)한다. 무엇을? app을
// App을 어디에 출력? id 가 root인 곳에 
// root는 index.html 에 있다. 
// React vs ReactDOM
// React란?UI라이브러리 
// ReactDOM(Document Object Management)R은 리액트를 웹사이트에 출력(render)하는걸 도와주는 모델이다. 
// 모바일에 출력하고싶으면 ReactNative

serviceWorker.unregister();
