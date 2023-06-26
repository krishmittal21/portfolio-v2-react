import React, { Component } from 'react'
import Avatar from "../avatar/Avatar.js"
import ProjectMenu from './ProjectMenu.js'

export default class Project extends Component {
    render() {
        return <>
        <Avatar page='skills'/>
        <ProjectMenu/>
        </>
        
    }
}
