import React from "react";
import { Text, View } from 'react-native';
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import { Routes, redirect, Route } from "react-router-native";

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<Text>Working on it</Text>} />

      </Routes>
    </View>
  );
}

export default Main;
//The Constants are super important because they are automatically different depending on which operating system the app is running on.