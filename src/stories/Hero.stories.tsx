import React from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '~/theme'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Hero from '../components/Hero'

export default {
  title: 'PARTS/Hero',
  component: Hero,
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
} as ComponentMeta<typeof Hero>

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />

export const HeroImage = Template.bind({})
HeroImage.args = {
  userName: 'ユーザ名',
  mainHeroImage: 'https://picsum.photos/900/600',
  profileThumbnailImage: 'https://loremflickr.com/g/320/240/man',
}
