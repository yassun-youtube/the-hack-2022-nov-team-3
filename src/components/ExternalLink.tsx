import { FC } from 'react'
import LaunchIcon from '@mui/icons-material/Launch'
import { Link as MuiLink } from '@mui/material'

type Props = {
  url: string
  title: string
  color?: string
}

const ExternalLink: FC<Props> = ({ url, title, color = '#fff' }: Props) => {
  return (
    <MuiLink
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ display: 'inline-flex', alignItems: 'center', color, fontWeight: 'bold' }}
    >
      {title}
      <LaunchIcon fontSize="inherit" />
    </MuiLink>
  )
}

export default ExternalLink
