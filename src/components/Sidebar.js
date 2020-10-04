import React from 'react'
import './SidebarRow.css'
import SidebarRow from './SidebarRow';
import CollectionsIcon from '@material-ui/icons/Collections';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import InfoIcon from '@material-ui/icons/Info';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import PeopleIcon from '@material-ui/icons/People';
import { useStateValue } from '../StateProvider'
import { Link } from '@material-ui/core';

export default function Sidebar() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="sidebar">
            <SidebarRow src={user.photoURL} title={user.displayName} />
            <SidebarRow Icon={CollectionsIcon} title="Pages"/>
            <a style={{textDecoration: "none", color: "black"}} href="https://blavity.com/"><SidebarRow Icon={ChromeReaderModeIcon} title="News"/></a>
            <SidebarRow Icon={InfoIcon} title="About"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
            <SidebarRow Icon={PeopleIcon} title="Friends"/>
        </div>
    )
}
