import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '~/theme'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Title from '../components/Title'

export default {
  title: 'PARTS/Title',
  component: Title,
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
} as ComponentMeta<typeof Title>

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />

export const h1 = Template.bind({})
h1.args = {
  text: 'h1タイトル',
  level: 'h1',
}

export const h2 = Template.bind({})
h2.args = {
  text: 'h2タイトル',
  level: 'h2',
}

export const h3 = Template.bind({})
h3.args = {
  text: 'h3タイトル',
  level: 'h3',
}
