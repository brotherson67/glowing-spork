import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';


//eastablish link to graphql backend
const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <div>
      <main>
        <Router>
          <Home />
        </Router>
      </main>
    </div>
    </ApolloProvider>
  );
}

export default App;
