import React from 'react'
import Story from './Story'
import './StoryReel.css'

export default function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
              image="https://i.ibb.co/s9QvV7p/Tampa-bay-lightning-wins.jpg"
              profileSrc="https://i.ibb.co/YbjN1cr/Tampa-bay-blue-logo.jpg"
              title="Tampa Bay Lightning"
            />
            <Story
              image="https://i.ibb.co/kmP2dZS/Food-spread.webp"
              profileSrc="https://i.ibb.co/nk1VM6R/Food-profile-pic.jpg"
              title="Food Stop"
              />
            <Story
              image="https://i.ibb.co/m5bSmQw/Cinderella-castle-scaled.jpg"
              profileSrc="https://i.ibb.co/34ZZ2Zc/Disney-logo.jpg"
              title="Disney World"
              />
            <Story
              image="https://i.ibb.co/9b9NycN/Umbrella-academy-poster.jpg"
              profileSrc="https://i.ibb.co/Rbfm7Mz/netflixlogo-0-0.jpg"
              title="Netflix"
              />
            <Story
              image="https://i.ibb.co/gmjN7Gc/the-1975-concert.jpg"
              profileSrc="https://i.ibb.co/bz8XLfD/2016-The1975-Matt-Salacuse-070316-2-696x442.jpg"
              title="The 1975"
              />
        </div>
    )
}
