import React from 'react'

import ClippedBackground from '../components/header/background'
import HeaderContent from '../components/header/headerContent'

const HeaderPage = () => {
  return (
    <section id="Header">
      <ClippedBackground className={'clipped-background-header'}>
        <HeaderContent />
      </ClippedBackground>
    </section>
  )
}

export default HeaderPage
