import  ApolloClient from "apollo-boost";


const createApolloClient = () => {
  return new ApolloClient({
    uri: 'http://192.168.0.112:5001/api/repositories'
  })
}

export default createApolloClient;