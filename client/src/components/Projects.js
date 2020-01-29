import React, { Component } from 'react'
import ProjectContainer from '../containers/ProjectContainer'
import memoize from 'memoize-one'
import { CardColumns, Button } from 'react-bootstrap'

class Projects extends Component {
    state = {
        filterText: "",
        sort: false,
        sortedProjects: []
    }

    handleChange = event => {
        this.setState({ filterText: event.target.value })
    }

    filter = memoize(
        (projects, filterText) => projects.filter(project => {
            return project.title.toLowerCase().includes(filterText.toLowerCase()) || project.description.toLowerCase().includes(filterText.toLowerCase())
        })
    )

    handleClick = () => {
        this.setState({
            sort: true
        }, this.sortProjects)
    }

    sortProjects = () => {
        const compareFn = (a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()
                ) return -1
            if (a.title.toLowerCase() > b.title.toLowerCase()
                ) return 1
            return 0
        }
        const sortedProjects = this.props.projects.projects.sort(compareFn)
        this.setState({ sortedProjects })
    }

    renderProjects = projects => {
        return (
            <CardColumns>
                {projects.map(project => <ProjectContainer key={project.id} project={project} />)}
            </CardColumns>
        )
    }

    render() {
        const { projects } = this.props
        const filteredProjects = this.filter(projects.projects, this.state.filterText)
        return (
            <div style={{marginTop: '20px'}}>
                <Button variant="primary" onClick={this.handleClick}>Sort</Button>
                <input 
                    type="text" 
                    placeholder="Search" 
                    className="form-control-sm float-right"
                    onChange={this.handleChange}
                />

                <h1>Projects</h1>
                {projects.requesting ? <div className="spinner-border text-primary"></div> : null}
                
                {this.state.sort ? this.renderProjects(this.state.sortedProjects) : this.renderProjects(filteredProjects)}
            </div>
        )
    }
}

export default Projects