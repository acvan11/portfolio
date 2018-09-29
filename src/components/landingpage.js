import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
	render() {
		return(
			<div style={ {width: '100%', margin: 'auto'}}>
				<Grid className="landing-grid">
					<Cell col={12}>
						<img 
							src="https://i.postimg.cc/cLGVD9pL/cat.jpg" 
							className="avatar-img"
						/>
						<div className="banner-text">
							<h1>Full Stack Web Developer</h1>
							<hr/>
							<p>Language: HTML5  |  CSS3  |  JavaScript  |  SQL  |  Python  |  Java </p>
							<p>Database: Sequelize  |  PostgreSQL  |  Mongoose  |  MongoDB</p>
							<p>Frameworks: Node  |  Express  |  Django</p>
							<p>Libraries: React  |  Redux  |  Bootstrap  |  Materialize  |  jQuery</p>
							
							{/* Linkedin */}
							<div className="social-links">
								<a href="http://google.com" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-linkedin-square"  aria-hidden="true" />
								</a>
							

								<a href="http://google.com" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-github-square"  aria-hidden="true" />
								</a>

									<a href="http://google.com" rel="noopener noreferrer" target="_blank">
									<i className="fa fa-react-square"  aria-hidden="true" />
								</a>
							</div>

						</div>

					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Landing;