import React from 'react';
import { globalReducer } from '../reducers'
import { globalStore } from '../store'

import { 
  GlobalStateContext,
  GlobalDispatchContext } from '../contexts'

function GlobalProvier({ children }) {
  const [state, dispatch] = React.useReducer(globalReducer, globalStore) 
  return (
      <GlobalStateContext.Provider value={state}>
        <GlobalDispatchContext.Provider value={dispatch}>
            { children }
        </GlobalDispatchContext.Provider>
      </GlobalStateContext.Provider>
  )
}

export { GlobalProvier }