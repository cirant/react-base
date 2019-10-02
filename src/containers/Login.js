import React from 'react';
import Service from '../services';
import { GlobalStateContext } from '../contexts'

const Login = () => {
  /* const count  = React.useContext(GlobalStateContext);
  console.log('cont ', count); */

  const [state, setState] = React.useState();
  
  const authenticate = async () => {
    try{
      console.log('los estados son ', state);
      
      const req = new Service();
      const { data } = await req.create();
    } catch (e){
      console.log('ERROR !!!!! ', e);
    }
  }

  return <div>
    login
    <input type="text" onChange={({ target }) => setState({ ...state, rut: target.value})}/>
    <input type="password" onChange={({ target }) => setState({ ...state, password: target.value})}/>
    <button onClick={authenticate}>login </button>
  </div>
}

export default Login;