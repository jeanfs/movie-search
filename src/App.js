import React, { Component } from 'react';

// Router
import AppRouter from './router';

class App extends Component {
  render() {
    return (
      <section className="ms-content">
        <AppRouter />
      </section>
    );
  }
}

export default App;