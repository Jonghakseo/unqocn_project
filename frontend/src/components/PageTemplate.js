import React from 'react'
import './PageTemplate.css'
import './NavTop'
import NavTop from './NavTop'

const PageTemplate = ({ form, children }) => {
  //비 구조화 할당. (props)를 받아서 form과 children으로 쪼갰다
  return (
    <main className="page_template">
      <NavTop className="nav_top"></NavTop>
      <section className="main_contents"></section>
    </main>
  )
}

export default PageTemplate
