import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '~/theme'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import SkillList from '../components/SkillList'

export default {
  title: 'PARTS/SkillList',
  component: SkillList,
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
} as ComponentMeta<typeof SkillList>

const Template: ComponentStory<typeof SkillList> = (args) => <SkillList {...args} />

export const l1 = Template.bind({})
l1.args = {
  years_of_use: [
    {
      label: 'JavaScript',
      value: '3年',
    },
    {
      label: 'C++',
      value: '5年',
    },
    {
      label: 'React',
      value: '5年',
    },
    {
      label: 'Java',
      value: '9年',
    },
    {
      label: 'Nuxt.js',
      value: '9年',
    },
    {
      label: 'AWS',
      value: '8年',
    },
    {
      label: 'Docker',
      value: '4年',
    },
  ],
}
