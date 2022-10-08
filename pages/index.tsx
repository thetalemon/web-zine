import type { NextPage } from 'next'
import Head from 'next/head'
import React, {useEffect, useRef, useCallback} from 'react'
import styles from '../styles/Home.module.scss'
import Page from './components/page'
import PageLast from './components/pageLast'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { IMAGE_LIST, createPublicImagePath } from '../data/images'

const Home: NextPage = () => {

  gsap.registerPlugin(ScrollTrigger)

  const pagesWrapperRef = useRef<HTMLDivElement | null >(null);
  const pagesRef = useRef<HTMLDivElement | null >(null);
  const didEffect = React.useRef(false);

  const setupGsap = useCallback((pagesElement: HTMLDivElement, pagesWrapperElement: HTMLDivElement) => {
    gsap.to(pagesElement, {
      x: () => -(pagesElement.clientWidth - pagesWrapperElement.clientWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: '#horizontal-scroll-section',
        start: 'top top',
        end: () => `+=${pagesElement.clientWidth - pagesWrapperElement.clientWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    })
    gsap.to('main', {
      scrollTrigger: {
        trigger: '#horizontal-scroll-section',
        start: 'top center',
        end: () => `+=${pagesElement.clientWidth - pagesWrapperElement.clientWidth + 200}`,
        scrub: true, 
        onEnter: () => gsap.to('main', {
          backgroundColor: '#000',
          duration: 1.4
        }),
        onLeave: () => gsap.to('main', {
          backgroundColor: '#fff',
          duration: 1.4
        }),
        onEnterBack: () => gsap.to('main', {
          backgroundColor: '#000',
          duration: 1.4
        }),
        onLeaveBack: () => gsap.to('main', {
          backgroundColor: '#fff',
          duration: 1.4
        }),
      },
    })
},[])

  useEffect(() => {
    if (didEffect.current) return 
    didEffect.current = true;
    const pagesElement = pagesRef?.current;
    if(!pagesElement) return
    
    const pagesWrapperElement = pagesWrapperRef?.current;
    if(!pagesWrapperElement) return
    setupGsap(pagesElement, pagesWrapperElement)
  }, [])

  return (
    <div>
      <Head>
        <title>ai generated ruin travel images</title>
        <meta name="description" content="廃墟旅行。イラストはすべてAIで生成したものに、微量の加筆をしたものです。" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.section} id="horizontal-scroll-section">
          <div className={styles.container}>
            <div className={styles.pagesWrapper} ref={pagesWrapperRef}>
              <div className={styles.pages} ref={pagesRef}>
                
                {IMAGE_LIST.map((data) => {
                  return (<Page key={data.id} srcpath={createPublicImagePath(data.id.toString())}/>)
                })}
                <PageLast/>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
