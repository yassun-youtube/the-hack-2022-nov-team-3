import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '~/theme'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import BreadCrumbsList from '../components/BreadCrumbsList'

export default {
  title: 'PARTS/BreadCrumbsList',
  component: BreadCrumbsList,
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
} as ComponentMeta<typeof BreadCrumbsList>

const Template: ComponentStory<typeof BreadCrumbsList> = (args) => <BreadCrumbsList {...args} />

export const BreadCrumbs = Template.bind({})
BreadCrumbs.args = {
  userName: 'ユーザ名',
}
