import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import StarsIcon from '@material-ui/icons/Stars';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import './Header.css';

export default function Header() {
    return (
        <div className="header">
            <div className="header__left">
            <img className="logo" src="https://i.ibb.co/MNZHW9P/Screen-Shot-2020-09-30-at-10-58-50-PM.png" />

            <div className="header__input">
                <SearchIcon />
                <input type="text" placeholder="Search Trendi" />
            </div>
            </div>

            <div className="header__center">
                <div className="header__option header__option--active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <PersonIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <StarsIcon fontSize="large" />
                </div>
            </div>

            <div className="header__right">
                <div className="header__info">
                    <Avatar />
                    <h4>Cody Howard</h4>
                </div>
                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <QuestionAnswerIcon />
                </IconButton>
            </div>
        </div>
    )
}
