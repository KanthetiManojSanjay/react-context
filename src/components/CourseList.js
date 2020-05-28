import React, { Component } from 'react'
import { ThemeContext } from './ThemeContext'

class CourseList extends Component {
    static contextType = ThemeContext
    render() {
        const {isLightTheme, light, dark}=this.context
        const theme = isLightTheme ? light : dark;
        return (
            <div className="book-list" style={{color: theme.color, background: theme.bg}}>
                <ul>
                    <li style={{background: theme.ui}}>React JS</li>
                    <li style={{background: theme.ui}}>Angular</li>
                    <li style={{background: theme.ui}}>Node</li>
                </ul>
            </div>
        )
    }
}

export default CourseList
