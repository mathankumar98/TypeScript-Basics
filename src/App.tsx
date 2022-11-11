import { Console } from 'console';
import React from 'react';
// import Student from './Student';
import './App.css';
import store,{COUNTER_DECREMENT, COUNTER_INCREMENT} from './Student';

class App extends React.Component {
  
  // return(<Student />)
    
  }
  increment =() => {
    store.dispatch({type:COUNTER_INCREMENT});
    Console.log(store.getState().count);
  }

  decrement =() => {
    store.dispatch({type:COUNTER_DECREMENT});
    Console.log(store.getState().count);
  }
  render() {
    return (
      <div>
      <button onClick={this.increment}>Increment</button>
      <button onClick={this.Decrement}>Decrement</button>
      </div>
    );
  }
}

export default App;
