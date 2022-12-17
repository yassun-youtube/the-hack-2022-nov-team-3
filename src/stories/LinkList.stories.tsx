import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '~/theme'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import LinkList from '../components/LinkList'

export default {
  title: 'PARTS/LinkList',
  component: LinkList,
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
} as ComponentMeta<typeof LinkList>

const Template: ComponentStory<typeof LinkList> = (args) => <LinkList {...args} />

export const l1 = Template.bind({})
l1.args = {
  links: [
    {
      label: 'Twitter',
      value: 'v1',
    },
    {
      label: 'Facebook',
      value: 'v2',
    },
    {
      label: 'hoge',
      value: 'v3',
    },
    {
      label: 'youtube',
      value: 'v4',
    },
    {
      label: 'HP',
      value: 'v5',
    },
    {
      label: '何かのリンク',
      value: 'v6',
    },
    {
      label: '何かのリンク2',
      value: 'v7',
    },
    {
      label: '何かのリンク33',
      value: 'v8',
    },
    {
      label: '何かのリンク4',
      value: 'v9',
    },
  ],
}
