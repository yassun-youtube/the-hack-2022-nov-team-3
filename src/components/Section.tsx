/** @jsxImportSource @emotion/react */
'use client'

import Box from '@mui/material/Box'

type Props = {
  children: React.ReactNode
}

const Section: React.FC<Props> = ({ children }) => {
  return (
    <Box
      sx={{
        my: 5,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {children}
    </Box>
  )
}

export default Section
