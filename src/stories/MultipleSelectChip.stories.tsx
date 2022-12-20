import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '~/theme'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import MultipleSelectChip from '~/components/MultipleSelectChip'

export default {
  title: 'PARTS/MultipleSelectChip',
  component: MultipleSelectChip,
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
} as ComponentMeta<typeof MultipleSelectChip>

const Template: ComponentStory<typeof MultipleSelectChip> = (args) => (
  <MultipleSelectChip {...args} />
)

export const MultipleSelect = Template.bind({})
MultipleSelect.args = {
  labelName: 'スキル',
  value: ['React'],
  categoryItemList: {
    js: 'JavaScript',
    ts: 'TypeScript',
    react: 'React',
  },
  changeHandler: (data) => {
    return data
  },
}
