import {ApolloClient, HttpLink, InMemoryCache, split} from '@apollo/client'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { getMainDefinition } from '@apollo/client/utilities';

const httpLink = new HttpLink({
    uri: "https://liberal-gull-73.hasura.app/v1/graphql",
    headers:{
        'x-hasura-admin-secret': "Pmlt0J5UpHPz5ITbXAHSt8fIl3fcdP9A6q11MG3dayGDgqLVi6xaYhERZmUc455p"
    }
});

const wsLink = new GraphQLWsLink(createClient({
    url: 'wss://liberal-gull-73.hasura.app/v1/graphql',
    connectionParams:{
            headers:{
                'x-hasura-admin-secret': "Pmlt0J5UpHPz5ITbXAHSt8fIl3fcdP9A6q11MG3dayGDgqLVi6xaYhERZmUc455p"
            }
        }
}));

const splitLink = split(
    ({query}) =>{
        const definition = getMainDefinition(query);
        return(
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    wsLink,
    httpLink,
);

const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
})

export default client;