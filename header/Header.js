import './header.css'
import {Menu, Search, Mic, VideoCall, Apps, Notifications} from '@material-ui/icons';
import { useState } from 'react';
import '../MenuToggler'

export default function Header() {
    const menuToggle = document.querySelector(".menuToggler")

    return (
        <div className="header">
        
            <div className="headerLeft">
                <Menu className="menuToggler" />
                <img src="https://www.freeiconspng.com/thumbs/youtube-logo-png/youtube-logo-png-transparent-image-5.png" alt="" className="icon" />
            </div>
            <div className="headerMiddle">
            <Search className="searchIcon mobile"/>
                <div className="searchBox">
                <input type="text" placeholder="Search" />
                <div className="searchIconBox">
                <Search className="searchIcon"/>
                </div>
                </div>
                <Mic/>
               
            </div>
            <div className="headerRight">
                <VideoCall/>
                <Apps/>
                <Notifications/>
                <img src="https://yt3.ggpht.com/j7FJCxqqB9-w2vHWRj2d2BRKTdsm9lepyEptUdFYl47Hjn0uTxSBf68fsHEUZn6va0L9-zIcSw=s88-c-k-c0x00ffffff-no-rj-mo" alt="" />
            </div>
        </div>
    )
}
