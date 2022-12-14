import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '~/theme'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ActionAreaCard from '../components/ActionAreaCard'

export default {
  title: 'PARTS/ActionAreaCard',
  component: ActionAreaCard,
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
} as ComponentMeta<typeof ActionAreaCard>

const Template: ComponentStory<typeof ActionAreaCard> = (args) => <ActionAreaCard {...args} />

export const card1 = Template.bind({})
card1.args = {
  src: 'https://loremflickr.com/g/320/320/man',
  name: 'やっすん the やっすん',
  text: 'こんにちは、やっすんと申します。こんにちは、やっすんと申します。',
}
