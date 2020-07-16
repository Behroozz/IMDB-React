import React from 'react'
import { Provider } from 'react-redux'
import store from './state/store'
import Container from './components/layout/Container.jsx'

const App = () => {
  return (
    <Provider store={store}>
      <Container/>
    </Provider>
  )
}

export default React.memo(App)