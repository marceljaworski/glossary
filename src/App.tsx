import './App.scss';
import { NavLink, Routes, Route, Navigate } from 'react-router-dom';
import { PageWelcome } from './pages/PageWelcome';
import { PageInfo } from './pages/PageInfo';

function App() {
	return (
		<div className="App">
			<h1>Website Developer Glossary</h1>
			<nav>
				<NavLink to="/welcome">Welcome</NavLink>
				<NavLink to="/info">Info</NavLink>
			</nav>

			<Routes>
				<Route path="/welcome" element={<PageWelcome />} />
				<Route path="/info" element={<PageInfo />} />
				<Route path="/" element={<Navigate to="/welcome" replace />} />
			</Routes>
		</div>
	);
}

export default App;
