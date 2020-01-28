import React, { Component } from 'react'
import { connect } from 'react-redux'
import { likeProject, dislikeProject } from '../actions/projects'
import CardContent from './CardContent'

class GuestProjectCard extends Component {
    state = {
        liked: false
    }

    handleClick = () => {
        this.setState(prevState => ({ liked: !prevState.liked} ), 
            () => {
                if (this.state.liked) this.props.likeProject(this.props.id)
                else this.props.dislikeProject(this.props.id)
            }
        )
    }

    button = () => {
        return (
            <button 
                className="btn btn-primary float-right" 
                onClick={this.handleClick} >
                {this.state.liked ? 'Liked' : 'Like'}
            </button>
        )
    } 

    render() {
        return (
            <>
                <CardContent {...this.props} buttons={this.button()} />
            </>
        )
    }
    
}

export default connect(undefined, { likeProject, dislikeProject })(GuestProjectCard)