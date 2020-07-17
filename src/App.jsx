import React from 'react'
import { Provider } from 'react-redux'
import store from './state/store'
import Container from './components/layout/Container.jsx'
import { ThemeContext, themes } from './config/theme'

const App = () => {
  return (
    <Provider store={store}>
      <ThemeContext.Provider value={themes.green}>
        <Container/>
      </ThemeContext.Provider>
    </Provider>
  )
}

export default React.memo(App)