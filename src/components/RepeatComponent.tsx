import React from 'react'

type Props = {
  children: React.ReactNode
  count: number
}

function RepeatComponent({ children, count }: Props) {
  return (
    <>
      {[...new Array(count)].map((_, i) => (
        <React.Fragment key={i}>{children}</React.Fragment>
      ))}
    </>
  )
}

export default RepeatComponent
