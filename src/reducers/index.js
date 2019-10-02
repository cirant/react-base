import React from 'react';
import { GlobalDispatchContext } from '../contexts';

export function globalReducer(state, action) {
  switch (action.type) {
    case 'add': {    
      return state
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export function useGlobaldispatch() {
  const context = React.useContext(GlobalDispatchContext)
  if (context === undefined) {
    throw new Error('useGlobaldispatch must be used within a GlobalProvier')
  }
  return context
}
