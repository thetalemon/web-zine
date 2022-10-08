import Image from 'next/image'
import React from 'react'
import styles from './styles/Page.module.scss'

type pageProps = {
  srcpath: string
}

const Page:React.FC<pageProps> = ({srcpath}) => {
  return (
    <div className={styles.page}>
      <Image width={512} height={640} alt='image' src={srcpath}/>
    </div>
  )
}

export default Page
