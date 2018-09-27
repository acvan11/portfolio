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
						</div>
					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Landing;