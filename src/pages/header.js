import React from 'react'

import ClippedBackground from '../components/shared/clippedBackground'
import HeaderContent from '../components/header/headerContent'

const HeaderPage = () => {
  return (
    <ClippedBackground className={'clipped-background'}>
      <HeaderContent />
    </ClippedBackground>
  )
}

export default HeaderPage
