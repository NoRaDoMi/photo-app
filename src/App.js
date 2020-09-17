import React, { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import NotFound from './components/NotFound';
import './App.scss';
import Footer from 'components/Footer';
import { Spinner } from 'reactstrap';

// Lazy load - Code splitting
const Photo = React.lazy(() => import('./features/Photo'));

function App() {
	return (
		<div className="photo-app">
			<Suspense fallback={<Spinner size="sm" color="primary" />}>
				<BrowserRouter>
					<Header />

					<Switch>
						<Redirect exact from="/" to="/photos" />

						<Route path="/photos" component={Photo} />

						<Route component={NotFound} />
					</Switch>

					<Footer />
				</BrowserRouter>
			</Suspense>
		</div>
	);
}

export default App;
