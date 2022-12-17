import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '~/theme'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import TagList from '../components/TagList'

export default {
  title: 'PARTS/TagList',
  component: TagList,
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
} as ComponentMeta<typeof TagList>

const Template: ComponentStory<typeof TagList> = (args) => <TagList {...args} />

export const t1 = Template.bind({})
t1.args = {
  skill: [
    {
      label: 'JavaScript',
      slug: 'js',
    },
    {
      label: 'TypeScript',
      slug: 'ts',
    },
    {
      label: 'Ruby on Rails',
      slug: 'ruby_on_rails',
    },
    {
      label: 'Next.js',
      slug: 'nextjs',
    },
    {
      label: 'Nuxt.js',
      slug: 'nuxtjs',
    },
    {
      label: 'Kubernetes',
      slug: 'kubernetes',
    },
    {
      label: 'PHP',
      slug: 'php',
    },
    {
      label: 'HTML5',
      slug: 'html5',
    },
  ],
  hobby: [
    {
      label: 'Soccer',
      slug: 'soccer',
    },
    {
      label: '睡眠',
      slug: 'sleep',
    },
    {
      label: 'あああああああ',
      slug: 'aaaaaaaa',
    },
    {
      label: 'ラーメン巡り',
      slug: 'ramen',
    },
    {
      label: 'ツーリング',
      slug: 'bike',
    },
  ],
  prefectures: [
    {
      label: '東京',
      slug: 'tokyo',
    },
    {
      label: '沖縄',
      slug: 'okinawa',
    },
  ],
}
