import React, { Children } from 'react'
import './contentDisplay.css'
import videos from '../VideosData'
import {VerifiedUser} from '@material-ui/icons';
import CategoryBar from '../category bar/CategoryBar';

export default function ContentDisplayRIght() {
    return (
        <div className="rightDisplay">
            <CategoryBar/>
            <div className="contentWrapper">
                {videos.map((singleVideo) => {
                    const {thumbnail, chIcon, title, chName, views, time, duration, verified} = singleVideo
                    return(
                        <SingleVideo {...singleVideo} />
                    )
                })}
            </div>
        </div>
    )
}

function SingleVideo({thumbnail, chIcon, title, chName, views, time, duration, verified}) {
    
    return (
        <div className="singleVideo">
            <div className="top__thumbnail">
                <img src={thumbnail} alt="" />
                <span className="duration">{duration}</span>
            </div>
            <div className="bottom__info">
                <div className="chIcon-title">
                 <img src={chIcon} alt="" />
                 <span className="title">{title}</span>
                </div>
                <div className="chName-verIcon">
                <span className="channelName">{chName}</span>
                <span> {verified ? <VerifiedUser className="icon"/> : null}</span>
                </div>
                <div className="views-time">
                   <span className="views">{views}</span>
                   <span className="dot"></span>
                   <span className="time">{time}</span>
                </div>
            </div>

        </div>
    )
}
