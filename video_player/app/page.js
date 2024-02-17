"use client";
import React, { useState, createContext, useEffect, useRef } from 'react';
import Player from './player/VideoPlayer';
import Playlist from './player/Playlist';
import Data from './player/data'

export const VideoDataContext = createContext()

export default function Home() {

  const videoRef = useRef(null)
  const [currentVideoInfo, setCurrentVideoInfo] = useState(Data[0])

  // Wait for 3s and play next video once the current video ends 
  const autoPlayNext = (index) => {
    if (index) {
      setTimeout(() => {
        setCurrentVideoInfo(Data[index + 1])
      }, 3000);
    }
  }

  return (
    <main >
      <div>
        <h1 className='font-bold text-center p-4 '>Welcome to your favourate video player </h1>
      </div>
      <div className='flex justify-between m-8'>
        <VideoDataContext.Provider value={{ currentVideoInfo, setCurrentVideoInfo, videoRef, autoPlayNext }}>
          <Player />
          <Playlist />
        </VideoDataContext.Provider>
      </div>
    </main>
  );
}
