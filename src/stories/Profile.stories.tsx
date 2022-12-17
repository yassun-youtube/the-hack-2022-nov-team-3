import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '~/theme'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Profile from '../components/Profile'

export default {
  title: 'PARTS/Profile',
  component: Profile,
  decorators: [
    (Story) => {
      return (
        // これで囲う
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Story />
        </ThemeProvider>
      )
    },
  ],
} as ComponentMeta<typeof Profile>

const Template: ComponentStory<typeof Profile> = (args) => <Profile {...args} />

export const p1 = Template.bind({})
p1.args = {
  text: `こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、
  こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、こんにちは、
  こんにちは、こんにちは、こんにちは、こんにちは、`,
}
