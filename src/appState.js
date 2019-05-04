import React from "react";

const { Consumer, Provider } = React.createContext()

const withAppState = Component => props => <Consumer>
  {
    (appState) => <Component {...props} {...appState} />
  }
</Consumer>


export { withAppState, Provider }