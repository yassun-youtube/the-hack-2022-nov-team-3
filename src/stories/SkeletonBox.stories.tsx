import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '~/theme'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import SkeletonBox from '../components/SkeletonBox'

export default {
  title: 'PARTS/SkeletonBox',
  component: SkeletonBox,
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
} as ComponentMeta<typeof SkeletonBox>

const Template: ComponentStory<typeof SkeletonBox> = (args) => <SkeletonBox {...args} />

export const SkeletonBox1 = Template.bind({})
