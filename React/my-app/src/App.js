import {Component} from 'react';
import './App.css';

const Header = () => {
	return <h2>Hello World!</h2>
}

// const Field = () => {
// 	const holder = 'Enter here';
// 	const styleField = {
// 		width: '300px',
// 	};
//
// 	return <input
// 		placeholder={holder}
// 		type="text"
// 		style={styleField} />
// }

// Наследуемся от компонента
class Field extends Component {
	render() {
		const holder = 'Enter here';
		const styleField = {
			width: '300px',
		};

		return <input
			placeholder={holder}
			type="text"
			style={styleField} />
	}
}

function Btn() {
	const text = 'Log in';
	// const res = () => {
	// 	return 'Log in';
	// }

	// const p = <p>Log in</p>

	const logged = true;

	return <button>{logged ? 'Enter' : text}</button>
}

function App() {
	return (
		<div className="App">
			{/*<header className="App-header">*/}
			{/*  <img src={logo} className="App-logo" alt="logo" />*/}
			{/*  <p>*/}
			{/*    Edit <code>src/App.js</code> and save to reload.*/}
			{/*  </p>*/}
			{/*</header>*/}
			<Header />
			<Field />
			<Btn />
		</div>
	);
}

export {Header};
export default App;
