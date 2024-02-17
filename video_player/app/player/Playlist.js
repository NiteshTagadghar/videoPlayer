"use client";
import React, { useContext, useEffect } from 'react'
import Data from './data'
import { VideoDataContext } from '../page';

function Playlist() {

    const { setCurrentVideoInfo, videoRef } = useContext(VideoDataContext)

    // Play the video which is clicked and add an index to the object 
    const updateTheVideo = (videoRequest, idx) => {
        let videoToPlay = videoRequest
        videoRequest.index = idx
        setCurrentVideoInfo(videoToPlay)
    }

    // Let the video tag load the new src
    useEffect(() => {
        videoRef.current.pause()
        videoRef.current.load()
    }, [updateTheVideo])

    return (
        <div>
            {Data.map((item, idx) => {
                return <div key={item.sources} onClick={() => updateTheVideo(item, idx)} className='flex hover:cursor-pointer h-16  hover:height-24 pb-2 px-2'>
                    <img className=' ' src={item.thumb} />
                    <p>{item.title}</p>
                </div>
            })}
        </div>
    )
}

export default Playlist