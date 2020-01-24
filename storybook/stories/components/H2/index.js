// @flow
import React, { memo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import type { TextStyleProp, ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { WHITE, PINK, BLUE } from '../constants'

const h2 = {
  fontFamily: '3270Narrow',
  fontSize: 21,
  color: BLUE
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  h2pink: {
    ...h2,
    color: PINK,
    marginTop: -24,
    marginLeft: -1
  },
  h2white: {
    ...h2,
    color: WHITE,
    marginTop: -23
  }
})

type H2T = {
  title: string,
  textStyle: TextStyleProp,
  viewStyle: ViewStyleProp
}

const H2 = memo<H2T>(({ title, viewStyle, textStyle }) => {
  const { container, h2pink, h2white } = styles
  return (
    <View style={[container, viewStyle]}>
      <Text style={[h2, textStyle]} ellipsizeMode="tail" numberOfLines={1}>
        {title}
      </Text>
      <Text style={[h2pink, textStyle]} ellipsizeMode="tail" numberOfLines={1}>
        {title}
      </Text>
      <Text style={[h2white, textStyle]} ellipsizeMode="tail" numberOfLines={1}>
        {title}
      </Text>
    </View>
  )
})

export { H2 }
