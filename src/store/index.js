import { configureStore } from '@reduxjs/toolkit'

import applicationReducer from './slices/application'
import blogReducer from './slices/blog'

const createStore = (preloadedState) => {
  const rootReducer = {
    application: applicationReducer,
    blog: blogReducer
  }

  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    preloadedState,
    devTools: process.env.NODE_ENV !== 'production',
  })

  return store
}

export default createStore
