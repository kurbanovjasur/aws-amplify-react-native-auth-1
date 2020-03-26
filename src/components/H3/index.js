// @flow
import React, { memo } from 'react'
import { Platform, StyleSheet } from 'react-native'
import type { TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import { useTheme } from '@react-navigation/native'
import { CustomFontsProvider, Text } from 'react-native-custom-fonts'

const styles = StyleSheet.create({
  h: {
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1
  }
})

type H3T = {
  title: string,
  textStyle: TextStyleProp
}

const H3 = memo<H3T>(({ title, textStyle }) => {
  const { h } = styles
  const {
    h3: { fontFamily, fontSize, color, uri },
    colors: { secondary }
  } = useTheme()
  const fontFaces = [
    {
      fontFamily,
      uri: uri || 'https://s3.eu-central-1.wasabisys.com/ghashtag/fonts/TheDolbak-Brush.ttf'
    }
  ]
  const size = Platform.OS === 'ios' ? 15 : 15
  const flattenedStyle = StyleSheet.flatten([
    h,
    textStyle,
    { fontFamily, color, fontSize: fontSize || size, textShadowColor: secondary }
  ])
  return (
    <CustomFontsProvider fontFaces={fontFaces}>
      <Text style={flattenedStyle}>{title}</Text>
    </CustomFontsProvider>
  )
})

export { H3 }
