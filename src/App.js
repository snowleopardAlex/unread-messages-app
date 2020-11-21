import React from 'react';
import './App.css';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
    unreadMessages: ["a", "b", "c", "d"]
    }
  }

  render() {
    return (
      <div className="App">
       {/* instead of ternary operator we can use &&
       {this.state.unreadMessages.length > 0 ? 
       <h2>You have {this.state.unreadMessages.length} unread Messages!</h2> : null}        
       </div> */}
       {this.state.unreadMessages.length > 0 && 
       <h2>You have {this.state.unreadMessages.length} unread Messages!</h2>}
       </div>
    );
  }
}

export default App;
