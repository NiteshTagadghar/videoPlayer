"use client";
import React, { useContext, useEffect, useRef } from 'react'
import Data from './data'
import { VideoDataContext } from '../page';

function Playlist() {

    const dragItem = useRef(0)
    const dragOverItem = useRef(0)

    const { setCurrentVideoInfo, videoRef, playList, setPlayList } = useContext(VideoDataContext)

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


    //Reorder the list of videos
    const handleSort = () => {

        const playListClone = [...playList]
        const temp = playListClone[dragItem.current]
        playListClone[dragItem.current] = playListClone[dragOverItem.current]
        playListClone[dragOverItem.current] = temp
        setPlayList(playListClone)

    }

    return (
        <div>
            {playList.map((item, idx) => {
                return <div key={item.sources} onClick={() => updateTheVideo(item, idx)} className='relative flex space-x-3  hover:cursor-pointer h-16  hover:height-24 pb-2 px-2'
                    draggable
                    onDragStart={() => dragItem.current = idx}
                    onDragEnter={() => dragOverItem.current = idx}
                    onDragEnd={handleSort}
                    onDragOver={(e) => e.preventDefault()}
                >
                    <img className=' ' src={item.thumb} />
                    <div className='flex justify-between w-full'>
                        <p>{item.title}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>

                </div>
            })}
        </div>
    )
}

export default Playlist