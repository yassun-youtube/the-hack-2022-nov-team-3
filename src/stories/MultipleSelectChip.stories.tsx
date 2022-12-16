import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '~/theme'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import MultipleSelectChip from '~/components/MultipleSelectChip'
import { stringify } from 'querystring'

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
  labelName: '人の名前',
  categoryItemList: [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ],
  changeHandler: (data) => {
    alert('選択した要素:' + data.toString())
    return data
  },
}

export const MultipleSelect2 = Template.bind({})
MultipleSelect2.args = {
  labelName: 'フロントエンド',
  categoryItemList: ['JavaScript', 'TypeScript', 'Angular', 'React', 'Vue', 'Svelte', 'Solid'],
  changeHandler: (data) => {
    return data
  },
}
