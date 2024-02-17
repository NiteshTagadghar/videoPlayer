"use client"
import React, { useContext, useEffect, useState } from 'react'
import { VideoDataContext } from '../page'

function Player() {

    const { currentVideoInfo } = useContext(VideoDataContext)
    const [currentVideo, setCurrentVideo] = useState(currentVideoInfo)

    useEffect(() => {
        setCurrentVideo(currentVideoInfo)
    }, [currentVideoInfo])

    return (

        <div className='flex justify-between '>
            <div className=''>
                <video id="hls-video" className='w-full h-100 border-collapse' controls autoPlay poster={currentVideo?.thumb} >
                    <source id="change-src" src={currentVideo?.sources} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}

export default Player