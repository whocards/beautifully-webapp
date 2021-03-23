import React, {
	useEffect,
	useState,
} from 'react'
import {
	Helmet,
	HelmetProvider,
} from 'react-helmet-async'
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom'
import { Header } from 'components/Header'
import LanguageContext from 'contexts/language.context'
import { getDefaultLanguage } from 'helpers'
import { About, Play, Print } from 'scenes'
import './App.css'

function App() {
	const [language, setLanguage] = useState(getDefaultLanguage())

	useEffect(() => {
		window.history.replaceState(null, '', '/')
	}, [])

	return (
		<LanguageContext.Provider value={{ language, setLanguage}}>
			<HelmetProvider>
				<Helmet>
					<title>Who Cards</title>
				</Helmet>

				<Router>
					<div className='app'>
						<Header />
						<div className='body flex-center'>
							<Switch>
								<Route exact path='/' component={Play} />
								<Route exact path='/print' component={Print} />
								<Route exact path='/about' component={About} />
								<Redirect to='/' />
							</Switch>
						</div>
					</div>
				</Router>
			</HelmetProvider>
		</LanguageContext.Provider>
	)
}

export default App
