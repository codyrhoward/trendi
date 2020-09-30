import React from 'react'
import Story from './Story'
import './StoryReel.css'

export default function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
              image="https://i.ibb.co/s9QvV7p/Tampa-bay-lightning-wins.jpg"
              profileSrc="https://i.ibb.co/nMPZ1kP/Tampa-Bay-Lightning-Logo-2011-svg.png"
              title="Tampa Bay Lightning"
            />
            <Story
              image="https://i.ibb.co/kmP2dZS/Food-spread.webp"
              profileSrc="https://i.ibb.co/nk1VM6R/Food-profile-pic.jpg"
              title="Food Stop"
              />
            <Story
              image="https://i.ibb.co/m5bSmQw/Cinderella-castle-scaled.jpg"
              profileSrc="https://i.ibb.co/XYpqqyb/Disney-logo.webp"
              title="Disney World"
              />
        </div>
    )
}
