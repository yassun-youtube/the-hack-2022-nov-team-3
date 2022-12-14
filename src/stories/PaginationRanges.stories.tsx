import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '~/theme'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import PaginationRanges from '../components/PaginationRanges'

export default {
  title: 'PARTS/PaginationRanges',
  component: PaginationRanges,
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
} as ComponentMeta<typeof PaginationRanges>

const Template: ComponentStory<typeof PaginationRanges> = (args) => <PaginationRanges {...args} />

export const Pagination1 = Template.bind({})
Pagination1.args = {
  itemCount: 100,
  pageSize: 10,
  defaultPage: 1,
  siblingCount: 1,
  boundaryCount: 2,
  changeHandler: () => {
    alert('クリックされました')
  },
}
