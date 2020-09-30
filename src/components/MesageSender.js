import React, {useState} from 'react'
import './MessageSender.css'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { Avatar } from '@material-ui/core'

export default function MesageSender() {
const [input, setInput] = useState('')
const [imageUrl, setImageUrl] = useState('')

const handleSubmit = event => {
    event.preventDefault()
    setInput('')
    setImageUrl('')
}

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar />
                <form>
                    <input 
                     value={input}
                     onChange={(event) => setInput(event.target.value)}
                     className="messageSender__input"
                     type="text" 
                     placeholder={`What's on your mind?`} 
                    />
                    <input 
                     value={imageUrl}
                     onChange={(event) => setImageUrl(event.target.value)}
                     className=""
                     type="text"
                     placeholder="Image URL (Optional)" 
                    />
                    <button onClick={handleSubmit} type="submit">
                        Hidden submit
                    </button>
                </form>
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style={{ color: 'coral' }} />
                    <h3>Go Live</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: 'lightBlue' }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{ color: 'gold' }} />
                    <h3>Mood</h3>
                </div>
            </div>
        </div>
    )
}
