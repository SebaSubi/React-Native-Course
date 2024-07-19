import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_REPOSITROIES } from "../graphql/queries";

const useRepositories = () => {

  const [repositories, setRepositories] = useState(null);

  const fetchRepositories = async () => {
    const response = await globalThis.fetch('http://192.168.0.112:5001/api/repositories');
    const data = await response.json();
    setRepositories(data);
  }

  useEffect(() => {
    fetchRepositories();
  }, [])

  const repositoriesNodes = repositories ? repositories.edges.map(edge => edge.node) : [];

  return {repositories: repositoriesNodes};
}

export default useRepositories;