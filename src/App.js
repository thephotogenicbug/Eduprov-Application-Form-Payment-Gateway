import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Medical from './Components/Medical'
import Header from './Components/Header'
import Form from './Components/Application'
import FormTest from './Components/ApplicationTest'
function App() {
	
	return (
		<div className="App">
			
			<HashRouter>
			<Header/>
				<Route  exact path='/medical'  component={Medical}  />
				<Route exact  path='/'  component={Form} />
			</HashRouter>
		
		</div>
	)
}

export default App
