"use client"
import React, { useContext } from 'react'
import { VideoDataContext } from '../page'

function Player() {


    const { currentVideoInfo, videoRef, autoPlayNext } = useContext(VideoDataContext)

    // If video played before start from previous left
    const handlePlay = () => {
        if (currentVideoInfo?.playedDuration > 0) {
            videoRef.current.currentTime = currentVideoInfo.playedDuration
        }
    }


    return (

        <div className=''>
            <div className=''>
                <video className='  w-full border-0 rounded-lg my-5 ' style={{ height: "600px" }} ref={videoRef} controls autoPlay poster={currentVideoInfo?.thumb}
                    onPlay={handlePlay}
                    onEnded={() => autoPlayNext(currentVideoInfo?.index)}
                >
                    <source src={currentVideoInfo?.sources} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div>
                    <h1 className='text-4xl font-extrabold font-serif pt-2 text-slate-900 mt-1 mb-2'>{currentVideoInfo.title}</h1>
                    <p className='text-lg font-serif'>{currentVideoInfo.description}</p>
                </div>
            </div >
        </div >
    )
}

export default Player