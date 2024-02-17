"use client";
import React, { useContext, useEffect } from 'react'
import Data from './data'
import { VideoDataContext } from '../page';

function Playlist() {

    const { setCurrentVideoInfo } = useContext(VideoDataContext)

    const updateTheVideo = (videoRequest) => {
        setCurrentVideoInfo(videoRequest)
    }

    useEffect(() => {
        const video = document.getElementById('hls-video');
        video.pause()
        video.load();
    }, [updateTheVideo])

    return (
        <div>
            {Data.map((item) => {
                return <div key={item.sources} onClick={() => updateTheVideo(item)} className='flex hover:cursor-pointer h-16  hover:height-24 p-2'>
                    <img className=' ' src={item.thumb} />
                    <p>{item.title}</p>
                </div>
            })}
        </div>
    )
}

export default Playlist