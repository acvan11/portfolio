import React, { Component } from 'react';
import { Tabs, Tab } from 'react-mdl';
import ProjectOneImg from './project1.png';

class Projects extends Component {
	constructor(props){
		super(props);
		this.state = {activeTab: 0};
	}

	toggleCategories() {
		if(this.state.activeTab === 0){
			return(
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
						<h1 className="project-name">Car Racing Game</h1>
						</div>
					</div>
				{/*break point for multiple size*/}
					<div className="row">
						<div className="col-sm-12 col-md-10 col-lg-8 offset-md-1 offset-lg-2 project-img-container">
							<img src={ProjectOneImg} className="project-img" alt="Project One image, Car Racing"/>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-12 col-md-10 col-lg-8 offset-md-1 offset-lg-2">
							<div className="row button-row">
								<div className="col-sm-6 to-right">
									<a className="btn btn-dark git-button-left" href="https://angawdi.github.io/Car-Racing-Game/">Live</a>
								</div>
								<div className="col-sm-6">
									<a className="btn btn-dark git-button-right" href="https://github.com/angawdi/Car-Racing-Game">GitHub</a>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-12 col-md-10 col-lg-8 offset-md-1 offset-lg-2 description-container">
							<p>this is the description!</p>

							<p>technologies here!</p>
						</div>
					</div>
				</div>
			)
		} else if (this.state.activeTab === 1) {
			return (
				<div><h1>This is Project 2</h1></div>
			)
		} else if (this.state.activeTab === 2) {
			return (
				<div><h1>This is Project 3</h1></div>
			)
		} else if (this.state.activeTab === 3) {
			return (
				<div><h1>This is Project 4</h1></div>
			)
		}
	}
	

	render() {
		return(
			<div className="category-tabs">
				<Tabs activeTab={this.state.activeTab} onChange={(tabId) =>
					this.setState({ activeTab: tabId })} ripple>
					<Tab>Project1</Tab>
					<Tab>Project2</Tab>
					<Tab>Project3</Tab>
					<Tab>Project4</Tab>
				</Tabs>

				<section className="projects-grid">
					{this.toggleCategories()}
				</section>
			</div>
		)
	}
}

export default Projects;