import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './landingpage';
import About from './aboutme';
import Contact from './contact';
import Resume from './resume';
import Projects from './projects';


const Main = () => (
	<Switch>
		<Route exact path="/" component={Landing} />
		<Route exact path="/about" component={About} />
		<Route exact path="/contact" component={Contact} />
		<Route exact path="/resume" component={Resume} />
		<Route exact path="/projects" component={Projects} />
	</Switch>
)

export default Main;