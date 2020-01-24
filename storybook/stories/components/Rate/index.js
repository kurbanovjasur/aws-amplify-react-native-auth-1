// @flow
import React, { memo } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Emoji from 'react-native-emoji'
import { H4 } from '..'

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center'
  },
  sub: {
    flexDirection: 'row'
  },
  emoji: {
    fontSize: 18,
    marginBottom: 4
  },
  h4: {
    top: 3,
    paddingLeft: 6
  }
})

type RateT = {
  title: string,
  onPress: Function
}

const Rate = memo<RateT>(({ title, onPress }) => {
  const { container, sub, emoji, h4 } = styles
  return (
    <TouchableOpacity onPress={onPress} style={container}>
      <View style={sub}>
        <Emoji name=":unicorn_face:" style={emoji} />
        <H4 title={title} textStyle={h4} />
      </View>
    </TouchableOpacity>
  )
})

export { Rate }
