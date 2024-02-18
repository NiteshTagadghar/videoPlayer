"use client";
import React, { useState, createContext, useRef } from 'react';
import VideoPlayer from './player/VideoPlayer'
import Playlist from './player/Playlist';
import Data from './player/data'

export const VideoDataContext = createContext()

export default function Home() {

  const videoRef = useRef(null)
  const [playList, setPlayList] = useState(Data)
  const [currentVideoInfo, setCurrentVideoInfo] = useState(playList[0])

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
        <h1 className='font-bold text-center pt-8 text-4xl'>Welcome to your loved video player </h1>
      </div>
      <div className='flex justify-between m-1 w-full '>
        <VideoDataContext.Provider
          value={{ currentVideoInfo, setCurrentVideoInfo, videoRef, autoPlayNext, playList, setPlayList }}
        >
          <div style={{ width: "75%" }}>
            <VideoPlayer />
          </div>
          <div style={{ width: "25" }}>
            <Playlist />
          </div>
        </VideoDataContext.Provider>
      </div>
    </main>
  );
}
