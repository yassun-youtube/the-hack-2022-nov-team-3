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
  mainHeroImage: 'https://picsum.photos/1600/900',
  profileThumbnailImage: 'https://loremflickr.com/g/320/240/man',
  releaseDate: '2022/12/11',
  lastUpdatedDate: '2022/12/11',
}

export const HeroImage2 = Template.bind({})
HeroImage2.args = {
  userName: 'ユーザ名',
  profileThumbnailImage: 'https://loremflickr.com/g/320/240/man',
  releaseDate: '2022/12/11',
}
