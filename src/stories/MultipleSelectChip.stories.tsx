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

export const MultipleSelect2 = Template.bind({})
MultipleSelect2.args = {
  labelName: 'スキル',
  categoryItemList: [
    {
      label: 'JavaScript',
      slug: 'js',
    },
    {
      label: 'TypeScript',
      slug: 'ts',
    },
    {
      label: 'React',
      slug: 'react',
    },
  ],
  changeHandler: (data) => {
    return data
  },
}
