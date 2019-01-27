import React from 'react'

import ClippedBackground from '../components/shared/clippedBackground'
import HeaderContent from '../components/header/headerContent'

const HeaderPage = () => {
  return (
    <section id="Header">
      <ClippedBackground className={'clipped-background'}>
        <HeaderContent />
      </ClippedBackground>
    </section>
  )
}

export default HeaderPage
