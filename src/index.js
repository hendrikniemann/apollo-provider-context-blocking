import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, ApolloClient } from 'react-apollo';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Link to="/first">first</Link> | <Link to="/second">second</Link>
      <Switch>
        <Route path="/first" render={() => <p>first</p>} />
        <Route path="/second" render={() => <p>second</p>} />
        <Route render={() => <p>other</p>} />
      </Switch>
    </div>
  );
}

const client = new ApolloClient({
  // This is just a fake network interface since we don't do any queries here
  networkInterface: {
    query: () => Promise.resolve({ data: null, errors: null }),
  },
})

ReactDOM.render(
  <div>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </div>,
  document.getElementById('root')
);
