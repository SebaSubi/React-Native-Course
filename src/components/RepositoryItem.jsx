import React from 'react'
import { Image, View, StyleSheet, Platform } from 'react-native'
import StyledText from './StyledText'
import RepositoryStats from './RepositoryStats'
import theme from '../theme'
import RepositoryItemHeader from './RepositoryItemHeader'

const RepositoryItem = (props) => (
  <View key={props.id} style={styles.container}>
    <RepositoryItemHeader {...props} />
    <RepositoryStats {...props} />
  </View>
)


const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 5,
  },
  languaje: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: Platform.select({
      android: 'red',
      ios: theme.colors.primary,
      default: 'purple'
    }),
    alignSelf: 'flex-start',
    marginVertical: 4,
    borderRadius: 4,
    overflow: 'hidden'
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4
  }
})


export default RepositoryItem