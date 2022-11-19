import {ApolloClient, InMemoryCache} from '@apollo/client'

const client = new ApolloClient({
    uri: "https://liberal-gull-73.hasura.app/v1/graphql",
    cache: new InMemoryCache(),
    headers:{
        'x-hasura-admin-secret': "Pmlt0J5UpHPz5ITbXAHSt8fIl3fcdP9A6q11MG3dayGDgqLVi6xaYhERZmUc455p"
    }
})

export default client;