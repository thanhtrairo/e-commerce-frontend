import React from 'react'

type SectionHeadingProps = {
  children: React.ReactNode
}

const SectionHeading = (props: SectionHeadingProps) => {
  const { children } = props

  return <h1 className="mb-8 text-start text-lg font-medium">{children}</h1>
}

export default SectionHeading
