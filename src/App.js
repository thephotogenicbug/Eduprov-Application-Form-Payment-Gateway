import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Medical from './Components/Medical'
import Header from './Components/Header'
import Form from './Components/Application'
import Thankyou from './Components/Thankyou'
import Engineering from './Components/Engineering'
import Undergraduate from './Components/Ugcourse'
import Oversease from './Components/Oversease'
import Test from './Components/Test'
function App() {
	
	return (
		<div className="App">
			
			<HashRouter>
			<Header/>
				<Route  exact path='/medical'  component={Medical}  />
				<Route  exact path='/engineering'  component={Engineering}  />
				<Route  exact path='/undergraduate'  component={Undergraduate}  />
				<Route  exact path='/oversease'  component={Oversease}  />
				<Route  exact path='/test'  component={Test}  />
				<Route exact  path='/'  component={Form} />
				<Route exact  path='/thankyou'  component={Thankyou} />
			</HashRouter>
		
		</div>
	)
}

export default App
