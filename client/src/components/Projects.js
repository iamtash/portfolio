import React, { Component } from 'react'
import ProjectContainer from '../containers/ProjectContainer'
import memoize from 'memoize-one'
import { CardColumns } from 'react-bootstrap'

class Projects extends Component {
    state = {
        filterText: ""
    }

    renderProjects = projects => {
        return (
            <CardColumns>
                {projects.map(project => <ProjectContainer key={project.id} project={project} />)}
            </CardColumns>
        )
    }

    handleChange = event => {
        this.setState({ filterText: event.target.value })
    }

    filter = memoize(
        (projects, filterText) => projects.filter(project => {
            return project.title.toLowerCase().includes(filterText.toLowerCase()) || project.description.toLowerCase().includes(filterText.toLowerCase())
        })
    );

    render() {
        const { projects } = this.props
        const filteredProjects = this.filter(projects.projects, this.state.filterText)
        return (
            <div style={{marginTop: '20px'}}>
                <input 
                    type="text" 
                    placeholder="Search" 
                    className="form-control-sm float-right"
                    onChange={this.handleChange}
                />

                <h1>Projects</h1>
                {projects.requesting ? <div className="spinner-border text-primary"></div> : null}
                {this.renderProjects(filteredProjects)}

            </div>
        )
    }
}

export default Projects