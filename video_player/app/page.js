"use client";
import React, { useState, createContext, useEffect } from 'react';
import Player from './player/VideoPlayer';
import Playlist from './player/Playlist';
import Data from './player/data'

export const VideoDataContext = createContext()

export default function Home() {

  const [currentVideoInfo, setCurrentVideoInfo] = useState(Data[0])

  useEffect(() => {
    setCurrentVideoInfo(currentVideoInfo)
  }, [currentVideoInfo])

  console.log(currentVideoInfo, 'current video in main page')

  return (
    <main >
      <div>
        <h1 className='font-bold text-center p-4 '>Welcome to your favourate video player </h1>
      </div>
      <div className='flex justify-between m-8'>
        <VideoDataContext.Provider value={{ currentVideoInfo, setCurrentVideoInfo }}>
          <Player />
          <Playlist />
        </VideoDataContext.Provider>
      </div>
    </main>
  );
}
