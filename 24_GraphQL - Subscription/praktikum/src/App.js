import { ApolloProvider } from '@apollo/client';
import './App.css';
import Home from './component/Home';
import client from './utils/apolloClient';

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
      <Home/>
      </ApolloProvider>
    </div>
  );
}

export default App;