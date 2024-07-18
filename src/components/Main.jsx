import React from "react";
import { Platform, Text, View } from 'react-native';
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";
import { Routes, redirect, Route } from "react-router-native";
import LogInPage from "../pages/LogIn";

// const AppBar = Platform.select({
//   ios: () => require('./IOSAppBar').default,
//   default: () => require('./AppBar').default
// })() 
// This is a good method if you are loading external libraries for different platforms, for example. But not the best
// when you are the one building these components.

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<LogInPage />} />
      </Routes>
    </View>
  );
}

export default Main;
//The Constants are super important because they are automatically different depending on which operating system the app is running on.