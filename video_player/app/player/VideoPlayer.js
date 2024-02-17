"use client"
import React, { useContext, useEffect, useState } from 'react'
import { VideoDataContext } from '../page'

function Player() {


    const { currentVideoInfo, videoRef, autoPlayNext } = useContext(VideoDataContext)


    return (

        <div className='flex justify-between '>
            <div className=''>
                <video className='w-full h-100 border-collapse' ref={videoRef} controls autoPlay poster={currentVideoInfo?.thumb} onEnded={() => autoPlayNext(currentVideoInfo?.index)}>
                    <source src={currentVideoInfo?.sources} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}

export default Player