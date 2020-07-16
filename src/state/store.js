import { createStore } from 'redux'
import ListingReducer from './reducers/listingPageReducer'

const store = createStore(
  ListingReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  
)

export default store