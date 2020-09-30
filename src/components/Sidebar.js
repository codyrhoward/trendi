import React from 'react'
import './SidebarRow.css'
import SidebarRow from './SidebarRow';
import CollectionsIcon from '@material-ui/icons/Collections';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import InfoIcon from '@material-ui/icons/Info';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import PeopleIcon from '@material-ui/icons/People';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src='https://i.ibb.co/0XJpMfC/Cody-Howard-Headshot.jpg' title='Cody Howard' />
            <SidebarRow Icon={CollectionsIcon} title="Pages"/>
            <SidebarRow Icon={ChromeReaderModeIcon} title="News"/>
            <SidebarRow Icon={InfoIcon} title="About"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
            <SidebarRow Icon={PeopleIcon} title="Friends"/>
        </div>
    )
}
