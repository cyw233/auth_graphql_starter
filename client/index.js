import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';

import App from './components/App';

const cache = new InMemoryCache();
const link = createHttpLink({
  uri: '/graphql',
  credentials: 'same-origin'
});
const client = new ApolloClient({
  dataIdFromObject: o => o.id,
  cache,
  link
})

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>

        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector('#root'));
