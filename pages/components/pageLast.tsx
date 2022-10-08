import React from 'react'
import pageStyles from './styles/Page.module.scss'
import pageLastStyles from './styles/PageLast.module.scss'

const PageLast:React.FC = () => {
  return (
    <div className={`${pageStyles.page} ${pageLastStyles.pageLast}`}>
      <p>少女たちと廃墟。</p>
      <p>画像生成： Stable Diffusion</p>
      <p>加筆・サイト制作： <a href="https://manasas.dev/" target='_blank' rel="noreferrer">manasas</a></p>
    </div>
  )
}

export default PageLast
