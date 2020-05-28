import React, { Component } from 'react'

export const ThemeContext= React.createContext()

class ThemeContextProvider extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            isLightTheme: true,
            light: {color:'#555',ui:'#ddd',bg:'#eee'},
            dark: {color:'#ddd',ui:'#333',bg:'#555'}
        }
    }

    toggleTheme = () => {
        this.setState({isLightTheme:!this.state.isLightTheme})
    }
    
    render() {
        return (
           <ThemeContext.Provider value={{...this.state , toggleTheme:this.toggleTheme}}>
               {this.props.children}
           </ThemeContext.Provider>
        )
    }
}

export default ThemeContextProvider
