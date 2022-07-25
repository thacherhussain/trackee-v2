import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native'

import { useTheme, Text } from 'native-base'

import { PrimaryText, Section } from '@components'

export const Tutorial = () => {
  const { colors } = useTheme()
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? colors.neutrals[900] : colors.neutrals[100],
    flex: 1,
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        style={backgroundStyle}
      >
        <View
          style={{
            backgroundColor: isDarkMode
              ? colors.neutrals[900]
              : colors.neutrals[100],
          }}
        >
          <Section title={'Step Zero'}>
            <PrimaryText text={'Absolute Imports are working!'} />
            <PrimaryText text={'With Native Base Styling!'} />
          </Section>
          <Section title='Step One'>
            Edit{' '}
            <Text fontSize={'lg'} fontWeight={700}>
              App.tsx
            </Text>{' '}
            to change this screen and then come back to see your edits.
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
