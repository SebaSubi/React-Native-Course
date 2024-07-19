import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";




const RepositoryList = () => {

  const { repositories } = useRepositories();

  return (
    <FlatList 
      data={repositories}
      ItemSeparatorComponent={() => <Text></Text>}
      renderItem={({item: repo}) => (
        <RepositoryItem {...repo} />
      )}
    >
    </FlatList>
  )
}

export default RepositoryList;