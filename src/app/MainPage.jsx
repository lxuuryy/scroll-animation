'use client'
import React from 'react'
import { motion, useTransform, useScroll } from 'framer-motion'




function MainPage({imageUrl, title, header}) {
  return (
    <div className=' relative'>
        <VideoSection header={header} imageUrl={imageUrl} title={title} />
    </div>
  )
}

export default MainPage

const VideoSection = ({imageUrl, title, header, text, click}) => {
   
    return (
        <div className='elative h-[100vh] md:h-[150vh] '>
            <Video imageUrl={imageUrl}/>

            <Content title={title} header={header}/>

        </div>
    )
}

const Video = ({imageUrl, text, click}) => {

    const targetRef = React.useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset:["start start", "end start" ]
    })

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5])
    
    return (
    <div className='sticky top-0'>
<motion.div  className='w-full '>
            <motion.video style={{scale}} className='rounded-xl' ref={targetRef}  autoPlay muted loop src={imageUrl}></motion.video>

            </motion.div>

            </div>
    )
}

const Content = ({title, header}) => {

    const targetRef2 = React.useRef(null)
    const { scrollYProgress } = useScroll({
        target: targetRef2,
        offset:["start end", "end start" ]

    })

    const moveUp = useTransform(scrollYProgress, [0, 1], [200, -200])
    const opacity = useTransform(scrollYProgress, [0.40, 0.5, 0.75], [0, 1, 0]);

    return (
        <motion.div ref={targetRef2} style={{y:moveUp, opacity}} className=' absolute top-[-200px] md:top-0 left-0  h-screen  inset-0 w-full flex flex-col justify-center items-center text-white'>
            <h1 className='text-4xl font-bold'>{header}</h1>
            <p className='text-lg'>{title}</p>
        </motion.div>
    )
}