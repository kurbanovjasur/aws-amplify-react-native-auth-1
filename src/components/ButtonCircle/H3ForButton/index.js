// @flow
import React, { memo } from 'react'
import { Platform, StyleSheet, Text } from 'react-native'
import type { TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { useTheme } from '@react-navigation/native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  h3: {
    textAlign: 'center',
    fontSize: Platform.OS === 'ios' ? 21 : 21,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1
  }
})

type H3ForButtonT = {
  title: string,
  textStyle: TextStyleProp
}

const H3ForButton = memo<H3ForButtonT>(({ title, textStyle }) => {
  const { h3 } = styles
  const {
    h3: { fontFamily, color },
    colors: { secondary }
  } = useTheme()
  return <Text style={[h3, textStyle, { color, fontFamily, textShadowColor: secondary }]}>{title}</Text>
})

export default H3ForButton
